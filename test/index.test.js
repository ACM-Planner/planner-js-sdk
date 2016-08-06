import 'isomorphic-fetch'

import { expect } from 'chai'

import plannerSDK from '../src'

function build() {
  return plannerSDK({ fetch })
}


describe('creates client', () => {
  it('sets fetch global variable', function () {
    expect(fetch)
  })

  it('create client', () => {
    expect(fetch)
    const client = build()
  })

  it('performs basic GET to root', function () {
    const client = build()
    return client.get()
  });

  it('get available periods', function () {
    const client = build()
    return client.periods()
  });

  it('get available courses', function () {
    const client = build()
    return client.courses()
  });

  it('get available courses with pagination', function () {
    const client = build()
    const limit = 70
    const page = 2
    return client.courses({}, { limit, page }).then(result => {
      expect(result.limit).to.equal(limit)
      expect(result.page).to.equal(page)
      expect(result.offset).to.equal(page * limit)
      return result
    })
  });

  it('pagination starts at page 0', function () {
    const client = build()
    return client.courses().then(result => {
      expect(result.page).to.equal(0)
      return result
    })
  });

  it('get available course', function () {
    const client = build()
    return client.course('MAT1610')
  });

  it('get available course periods', function () {
    const client = build()
    return client.coursePeriods('MAT1610')
  });

  it('get available course requisites', function () {
    const client = build()
    return client.courseRequisites('MAT1610')
  });

  it('get available course corequisites', function () {
    const client = build()
    return client.courseCorequisites('MAT1610')
  });

  it('get available course opens', function () {
    const client = build()
    return client.courseOpens('MAT1610')
  });

  it('get available course sections at period', function () {
    const client = build()
    return client.courseSections('MAT1610', { year: 2016, period: 1 })
  });

  it('get available course section at period', function () {
    const client = build()
    return client.courseSection('MAT1610', 1, { year: 2016, period: 1 })
  });

  it('get available course section teachers at period', function () {
    const client = build()
    return client.courseSectionTeachers('MAT1610', 1, { year: 2016, period: 1 })
  });
})
