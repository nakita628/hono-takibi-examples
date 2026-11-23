import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getLookupMd5Md5Route,
  getLookupSha1Sha1Route,
  getLookupSha256Sha256Route,
} from '../routes'

export const getLookupMd5Md5RouteHandler: RouteHandler<typeof getLookupMd5Md5Route> = async (c) => {
  throw new Error('Not implemented')
}

export const getLookupSha1Sha1RouteHandler: RouteHandler<typeof getLookupSha1Sha1Route> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getLookupSha256Sha256RouteHandler: RouteHandler<
  typeof getLookupSha256Sha256Route
> = async (c) => {
  throw new Error('Not implemented')
}
