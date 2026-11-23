import type { RouteHandler } from '@hono/zod-openapi'
import type { getLexicalcategoriesLanguageRoute } from '../routes'

export const getLexicalcategoriesLanguageRouteHandler: RouteHandler<
  typeof getLexicalcategoriesLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
