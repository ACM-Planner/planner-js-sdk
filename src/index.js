'use strict'

import Client from './client'

const BASE_URL = 'http://localhost:5000'


export default function createClient({ baseUrl, fetch }) {
  return new Client(baseUrl || BASE_URL, fetch)
}
