import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOrderFormsLagoIdRoute,
  getOrderFormsRoute,
  postOrderFormsLagoIdMarkAsSignedRoute,
  postOrderFormsLagoIdVoidRoute,
} from '../routes'

export const getOrderFormsRouteHandler: RouteHandler<typeof getOrderFormsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrderFormsLagoIdRouteHandler: RouteHandler<
  typeof getOrderFormsLagoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrderFormsLagoIdMarkAsSignedRouteHandler: RouteHandler<
  typeof postOrderFormsLagoIdMarkAsSignedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrderFormsLagoIdVoidRouteHandler: RouteHandler<
  typeof postOrderFormsLagoIdVoidRoute
> = async (c) => {
  throw new Error('Not implemented')
}
