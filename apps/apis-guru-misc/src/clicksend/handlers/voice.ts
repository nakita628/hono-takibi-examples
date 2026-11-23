import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getVoiceHistoryDateFromDateFromDateToDateToRoute,
  getVoiceHistoryExportFilenameFilenameRoute,
  getVoiceLangRoute,
  getVoiceReceiptsMessageIdRoute,
  getVoiceReceiptsRoute,
  postVoicePriceRoute,
  postVoiceReceiptsRoute,
  postVoiceSendRoute,
  putVoiceCancelAllRoute,
  putVoiceMessageIdCancelRoute,
  putVoiceReceiptsReadDateBeforeDateBeforeRoute,
} from '../routes'

export const putVoiceCancelAllRouteHandler: RouteHandler<typeof putVoiceCancelAllRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getVoiceHistoryExportFilenameFilenameRouteHandler: RouteHandler<
  typeof getVoiceHistoryExportFilenameFilenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVoiceHistoryDateFromDateFromDateToDateToRouteHandler: RouteHandler<
  typeof getVoiceHistoryDateFromDateFromDateToDateToRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVoiceLangRouteHandler: RouteHandler<typeof getVoiceLangRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postVoicePriceRouteHandler: RouteHandler<typeof postVoicePriceRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getVoiceReceiptsRouteHandler: RouteHandler<typeof getVoiceReceiptsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postVoiceReceiptsRouteHandler: RouteHandler<typeof postVoiceReceiptsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putVoiceReceiptsReadDateBeforeDateBeforeRouteHandler: RouteHandler<
  typeof putVoiceReceiptsReadDateBeforeDateBeforeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVoiceReceiptsMessageIdRouteHandler: RouteHandler<
  typeof getVoiceReceiptsMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVoiceSendRouteHandler: RouteHandler<typeof postVoiceSendRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putVoiceMessageIdCancelRouteHandler: RouteHandler<
  typeof putVoiceMessageIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
