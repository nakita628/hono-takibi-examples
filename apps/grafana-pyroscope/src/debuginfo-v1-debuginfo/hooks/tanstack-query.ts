import type { DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDebuginfoV1DebuginfoServiceKey() {
  return ['debuginfo.v1.DebuginfoService'] as const
}
