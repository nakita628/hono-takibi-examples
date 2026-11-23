import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1ReportIdRoute,
  deleteV1SloIdRoute,
  getV1ReportIdRoute,
  getV1ReportRoute,
  getV1SloIdRoute,
  getV1SloRoute,
  postV1ReportRoute,
  postV1SloRoute,
  putV1ReportIdRoute,
  putV1SloIdRoute,
} from '../routes'

export const getV1ReportRouteHandler: RouteHandler<typeof getV1ReportRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReportRouteHandler: RouteHandler<typeof postV1ReportRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ReportIdRouteHandler: RouteHandler<typeof deleteV1ReportIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ReportIdRouteHandler: RouteHandler<typeof getV1ReportIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ReportIdRouteHandler: RouteHandler<typeof putV1ReportIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SloRouteHandler: RouteHandler<typeof getV1SloRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SloRouteHandler: RouteHandler<typeof postV1SloRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1SloIdRouteHandler: RouteHandler<typeof deleteV1SloIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SloIdRouteHandler: RouteHandler<typeof getV1SloIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1SloIdRouteHandler: RouteHandler<typeof putV1SloIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
