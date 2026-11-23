import type { DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPathTestKey() {
  return ['{pathTest}'] as const
}
