import { stringify } from 'qs'
import trim from 'lodash/trim'
import trimEnd from 'lodash/trimEnd'

const GET = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
}

const PAGE = {
  page: '0',
  limit: 50,
}


export default class Client {
  constructor(baseUrl, fetch) {
    this.baseUrl = trimEnd(baseUrl, '/')
    this.fetch = fetch
  }

  get(path = '', query = {}, options = {}) {
    const querystring = stringify(query)
    const base = path ? `${this.baseUrl}/${trim(path, '/')}` : this.baseUrl
    const url = querystring ? `${base}?${querystring}` : base
    const opts = { ...GET, ...options }

    // console.log(url, opts)

    const fetch = this.fetch
    return fetch(url, opts)
      .then(result => result.json())
  }

  periods(search, pagination) {
    return this.get('/periods', { ...search, ...PAGE, ...pagination })
  }

  courses(search, pagination) {
    return this.get('/courses', { ...search, ...PAGE, ...pagination })
  }

  course(initials, options) {
    return this.get(`/courses/${initials}`, options)
  }

  coursePeriods(initials, pagination) {
    return this.get(`/courses/${initials}/periods`, { ...PAGE, ...pagination })
  }

  courseRequisites(initials, pagination) {
    return this.get(`/courses/${initials}/requisites`, { ...PAGE, ...pagination })
  }

  courseCorequisites(initials, pagination) {
    return this.get(`/courses/${initials}/corequisites`, { ...PAGE, ...pagination })
  }

  courseOpens(initials, pagination) {
    return this.get(`/courses/${initials}/opens`, { ...PAGE, ...pagination })
  }

  courseSections(initials, { year, period, ...search }, pagination) {
    return this.get(`/courses/${initials}/periods/${year}/${period}/sections`, {
      ...search,
      ...PAGE,
      ...pagination,
    })
  }

  courseSection(initials, section, { year, period, ...search }, options) {
    return this.get(`/courses/${initials}/periods/${year}/${period}/sections/${section}`, { ...search, ...options })
  }

  courseSectionTeachers(initials, section, { year, period, ...search }, pagination) {
    return this.get(`/courses/${initials}/periods/${year}/${period}/sections/${section}/teachers`, { ...search, ...pagination })
  }
}
