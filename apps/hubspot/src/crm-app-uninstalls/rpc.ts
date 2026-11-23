import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function deleteAppinstalls202609ExternalInstall(options?: ClientRequestOptions) {
  return await parseResponse(
    client.appinstalls['2026-09']['external-install'].$delete(undefined, options),
  )
}
