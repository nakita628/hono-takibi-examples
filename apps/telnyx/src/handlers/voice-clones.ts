import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteVoiceClonesIdRoute,
  getVoiceClonesIdSampleRoute,
  getVoiceClonesRoute,
  patchVoiceClonesIdRoute,
  postVoiceClonesFromUploadRoute,
  postVoiceClonesRoute,
} from '../routes'

export const getVoiceClonesRouteHandler: RouteHandler<typeof getVoiceClonesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postVoiceClonesRouteHandler: RouteHandler<typeof postVoiceClonesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postVoiceClonesFromUploadRouteHandler: RouteHandler<
  typeof postVoiceClonesFromUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteVoiceClonesIdRouteHandler: RouteHandler<
  typeof deleteVoiceClonesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchVoiceClonesIdRouteHandler: RouteHandler<typeof patchVoiceClonesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getVoiceClonesIdSampleRouteHandler: RouteHandler<
  typeof getVoiceClonesIdSampleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
