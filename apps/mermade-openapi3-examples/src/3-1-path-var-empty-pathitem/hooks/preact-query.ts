import type { DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getVarKey() {
  return ['{var}'] as const
}
