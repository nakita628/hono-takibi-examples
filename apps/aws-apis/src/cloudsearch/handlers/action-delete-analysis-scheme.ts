import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteAnalysisSchemeRoute,
  postActionDeleteAnalysisSchemeRoute,
} from '../routes'

export const getActionDeleteAnalysisSchemeRouteHandler: RouteHandler<
  typeof getActionDeleteAnalysisSchemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteAnalysisSchemeRouteHandler: RouteHandler<
  typeof postActionDeleteAnalysisSchemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
