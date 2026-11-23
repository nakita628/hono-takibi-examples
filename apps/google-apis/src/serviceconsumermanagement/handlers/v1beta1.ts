import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1beta1NameRoute,
  getV1beta1NameRoute,
  getV1beta1ParentConsumerQuotaMetricsRoute,
  getV1beta1ParentProducerOverridesRoute,
  patchV1beta1NameRoute,
  postV1beta1ParentConsumerQuotaMetricsImportProducerOverridesRoute,
  postV1beta1ParentProducerOverridesRoute,
} from '../routes'

export const deleteV1beta1NameRouteHandler: RouteHandler<typeof deleteV1beta1NameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1beta1NameRouteHandler: RouteHandler<typeof getV1beta1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1beta1NameRouteHandler: RouteHandler<typeof patchV1beta1NameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1beta1ParentConsumerQuotaMetricsRouteHandler: RouteHandler<
  typeof getV1beta1ParentConsumerQuotaMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta1ParentConsumerQuotaMetricsImportProducerOverridesRouteHandler: RouteHandler<
  typeof postV1beta1ParentConsumerQuotaMetricsImportProducerOverridesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1beta1ParentProducerOverridesRouteHandler: RouteHandler<
  typeof getV1beta1ParentProducerOverridesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta1ParentProducerOverridesRouteHandler: RouteHandler<
  typeof postV1beta1ParentProducerOverridesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
