import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAnythingKey() {
  return ['anything'] as const
}

export function getCookiesKey() {
  return ['cookies'] as const
}

export function getCookiesFormExplodedKey() {
  return ['cookies#formExploded'] as const
}

export function getCookiesFormNonExplodedKey() {
  return ['cookies#formNonExploded'] as const
}
