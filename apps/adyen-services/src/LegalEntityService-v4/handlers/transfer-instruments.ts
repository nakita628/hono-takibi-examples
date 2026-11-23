import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTransferInstrumentsIdRoute,
  getTransferInstrumentsIdRoute,
  patchTransferInstrumentsIdRoute,
  postTransferInstrumentsRoute,
} from '../routes'

export const postTransferInstrumentsRouteHandler: RouteHandler<
  typeof postTransferInstrumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTransferInstrumentsIdRouteHandler: RouteHandler<
  typeof getTransferInstrumentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTransferInstrumentsIdRouteHandler: RouteHandler<
  typeof deleteTransferInstrumentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTransferInstrumentsIdRouteHandler: RouteHandler<
  typeof patchTransferInstrumentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
