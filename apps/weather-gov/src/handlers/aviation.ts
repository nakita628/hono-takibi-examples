import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAviationCwsusCwsuIdCwasDateSequenceRoute,
  getAviationCwsusCwsuIdCwasRoute,
  getAviationCwsusCwsuIdRoute,
  getAviationSigmetsAtsuDateRoute,
  getAviationSigmetsAtsuDateTimeRoute,
  getAviationSigmetsAtsuRoute,
  getAviationSigmetsRoute,
} from '../routes'

export const getAviationCwsusCwsuIdRouteHandler: RouteHandler<
  typeof getAviationCwsusCwsuIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAviationCwsusCwsuIdCwasRouteHandler: RouteHandler<
  typeof getAviationCwsusCwsuIdCwasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAviationCwsusCwsuIdCwasDateSequenceRouteHandler: RouteHandler<
  typeof getAviationCwsusCwsuIdCwasDateSequenceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAviationSigmetsRouteHandler: RouteHandler<typeof getAviationSigmetsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAviationSigmetsAtsuRouteHandler: RouteHandler<
  typeof getAviationSigmetsAtsuRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAviationSigmetsAtsuDateRouteHandler: RouteHandler<
  typeof getAviationSigmetsAtsuDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAviationSigmetsAtsuDateTimeRouteHandler: RouteHandler<
  typeof getAviationSigmetsAtsuDateTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
