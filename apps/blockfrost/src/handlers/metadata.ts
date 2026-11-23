import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMetadataTxsLabelsLabelCborRoute,
  getMetadataTxsLabelsLabelRoute,
  getMetadataTxsLabelsRoute,
} from '../routes'

export const getMetadataTxsLabelsRouteHandler: RouteHandler<
  typeof getMetadataTxsLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetadataTxsLabelsLabelRouteHandler: RouteHandler<
  typeof getMetadataTxsLabelsLabelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetadataTxsLabelsLabelCborRouteHandler: RouteHandler<
  typeof getMetadataTxsLabelsLabelCborRoute
> = async (c) => {
  throw new Error('Not implemented')
}
