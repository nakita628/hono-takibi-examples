import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postV1beta1ProjectsProjectIdExportRoute,
  postV1beta1ProjectsProjectIdImportRoute,
} from '../routes'

export const postV1beta1ProjectsProjectIdExportRouteHandler: RouteHandler<
  typeof postV1beta1ProjectsProjectIdExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta1ProjectsProjectIdImportRouteHandler: RouteHandler<
  typeof postV1beta1ProjectsProjectIdImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}
