import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDefineAnalysisSchemeRoute,
  postActionDefineAnalysisSchemeRoute,
} from '../routes'

export const getActionDefineAnalysisSchemeRouteHandler: RouteHandler<
  typeof getActionDefineAnalysisSchemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDefineAnalysisSchemeRouteHandler: RouteHandler<
  typeof postActionDefineAnalysisSchemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
