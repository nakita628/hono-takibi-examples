import type { DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXCodeSamplesKey() {
  return ['x-code-samples'] as const
}

export function getXExplorerEnabledKey() {
  return ['x-explorer-enabled'] as const
}

export function getXHeadersKey() {
  return ['x-headers'] as const
}

export function getXProxyEnabledKey() {
  return ['x-proxy-enabled'] as const
}

export function getXSamplesLanguagesKey() {
  return ['x-samples-languages'] as const
}
