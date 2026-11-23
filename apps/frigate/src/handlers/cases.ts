import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCasesCaseIdRoute,
  getCasesCaseIdDownloadRoute,
  getCasesCaseIdRoute,
  getCasesRoute,
  patchCasesCaseIdRoute,
  postCasesRoute,
} from '../routes'

export const getCasesRouteHandler: RouteHandler<typeof getCasesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCasesRouteHandler: RouteHandler<typeof postCasesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCasesCaseIdRouteHandler: RouteHandler<typeof getCasesCaseIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCasesCaseIdRouteHandler: RouteHandler<typeof patchCasesCaseIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteCasesCaseIdRouteHandler: RouteHandler<typeof deleteCasesCaseIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCasesCaseIdDownloadRouteHandler: RouteHandler<
  typeof getCasesCaseIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}
