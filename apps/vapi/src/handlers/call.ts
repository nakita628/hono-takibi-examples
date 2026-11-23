import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCallIdRoute,
  getCallIdAssistantRecordingRoute,
  getCallIdCallLogsRoute,
  getCallIdCustomerRecordingRoute,
  getCallIdMonoRecordingRoute,
  getCallIdPcapRoute,
  getCallIdRoute,
  getCallIdStereoRecordingRoute,
  getCallIdVideoRecordingRoute,
  getCallRoute,
  patchCallIdRoute,
  postCallRoute,
} from '../routes'

export const postCallRouteHandler: RouteHandler<typeof postCallRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCallRouteHandler: RouteHandler<typeof getCallRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCallIdRouteHandler: RouteHandler<typeof getCallIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCallIdRouteHandler: RouteHandler<typeof patchCallIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCallIdRouteHandler: RouteHandler<typeof deleteCallIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCallIdMonoRecordingRouteHandler: RouteHandler<
  typeof getCallIdMonoRecordingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCallIdStereoRecordingRouteHandler: RouteHandler<
  typeof getCallIdStereoRecordingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCallIdVideoRecordingRouteHandler: RouteHandler<
  typeof getCallIdVideoRecordingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCallIdCustomerRecordingRouteHandler: RouteHandler<
  typeof getCallIdCustomerRecordingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCallIdAssistantRecordingRouteHandler: RouteHandler<
  typeof getCallIdAssistantRecordingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCallIdPcapRouteHandler: RouteHandler<typeof getCallIdPcapRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCallIdCallLogsRouteHandler: RouteHandler<typeof getCallIdCallLogsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
