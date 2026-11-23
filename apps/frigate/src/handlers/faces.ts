import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getFacesRoute,
  postFacesNameCreateRoute,
  postFacesNameDeleteRoute,
  postFacesNameReclassifyRoute,
  postFacesNameRegisterRoute,
  postFacesRecognizeRoute,
  postFacesReprocessRoute,
  postFacesTrainNameClassifyRoute,
  putFacesOldNameRenameRoute,
} from '../routes'

export const getFacesRouteHandler: RouteHandler<typeof getFacesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFacesReprocessRouteHandler: RouteHandler<typeof postFacesReprocessRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postFacesTrainNameClassifyRouteHandler: RouteHandler<
  typeof postFacesTrainNameClassifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFacesNameCreateRouteHandler: RouteHandler<
  typeof postFacesNameCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFacesNameRegisterRouteHandler: RouteHandler<
  typeof postFacesNameRegisterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFacesRecognizeRouteHandler: RouteHandler<typeof postFacesRecognizeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postFacesNameReclassifyRouteHandler: RouteHandler<
  typeof postFacesNameReclassifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFacesNameDeleteRouteHandler: RouteHandler<
  typeof postFacesNameDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putFacesOldNameRenameRouteHandler: RouteHandler<
  typeof putFacesOldNameRenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
