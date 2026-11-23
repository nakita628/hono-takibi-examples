import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCustomerKey() {
  return ['customer'] as const
}
