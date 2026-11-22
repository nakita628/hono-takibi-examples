import type { DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPathTestKey() {
  return ['{pathTest}'] as const
}
