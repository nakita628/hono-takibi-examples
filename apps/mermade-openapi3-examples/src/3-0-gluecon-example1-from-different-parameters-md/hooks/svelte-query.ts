import type { DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCustomerKey() {
  return ['customer'] as const
}
