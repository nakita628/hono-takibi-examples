import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteScheduleScheduleIdRoute,
  getCustomerServiceMetricTaskRoute,
  getCustomerServiceMetricTaskTaskIdRoute,
  getInventoryTaskRoute,
  getInventoryTaskTaskIdRoute,
  getOrderTaskRoute,
  getOrderTaskTaskIdRoute,
  getScheduleRoute,
  getScheduleScheduleIdDownloadResultFileRoute,
  getScheduleScheduleIdRoute,
  getScheduleTemplateRoute,
  getScheduleTemplateScheduleTemplateIdRoute,
  getTaskRoute,
  getTaskTaskIdDownloadInputFileRoute,
  getTaskTaskIdDownloadResultFileRoute,
  getTaskTaskIdRoute,
  postCustomerServiceMetricTaskRoute,
  postInventoryTaskRoute,
  postOrderTaskRoute,
  postScheduleRoute,
  postTaskRoute,
  postTaskTaskIdUploadFileRoute,
  putScheduleScheduleIdRoute,
} from './routes'
import {
  deleteScheduleScheduleIdRouteHandler,
  getCustomerServiceMetricTaskRouteHandler,
  getCustomerServiceMetricTaskTaskIdRouteHandler,
  getInventoryTaskRouteHandler,
  getInventoryTaskTaskIdRouteHandler,
  getOrderTaskRouteHandler,
  getOrderTaskTaskIdRouteHandler,
  getScheduleRouteHandler,
  getScheduleScheduleIdDownloadResultFileRouteHandler,
  getScheduleScheduleIdRouteHandler,
  getScheduleTemplateRouteHandler,
  getScheduleTemplateScheduleTemplateIdRouteHandler,
  getTaskRouteHandler,
  getTaskTaskIdDownloadInputFileRouteHandler,
  getTaskTaskIdDownloadResultFileRouteHandler,
  getTaskTaskIdRouteHandler,
  postCustomerServiceMetricTaskRouteHandler,
  postInventoryTaskRouteHandler,
  postOrderTaskRouteHandler,
  postScheduleRouteHandler,
  postTaskRouteHandler,
  postTaskTaskIdUploadFileRouteHandler,
  putScheduleScheduleIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCustomerServiceMetricTaskRoute, getCustomerServiceMetricTaskRouteHandler)
  .openapi(postCustomerServiceMetricTaskRoute, postCustomerServiceMetricTaskRouteHandler)
  .openapi(getCustomerServiceMetricTaskTaskIdRoute, getCustomerServiceMetricTaskTaskIdRouteHandler)
  .openapi(getInventoryTaskRoute, getInventoryTaskRouteHandler)
  .openapi(postInventoryTaskRoute, postInventoryTaskRouteHandler)
  .openapi(getInventoryTaskTaskIdRoute, getInventoryTaskTaskIdRouteHandler)
  .openapi(getOrderTaskRoute, getOrderTaskRouteHandler)
  .openapi(postOrderTaskRoute, postOrderTaskRouteHandler)
  .openapi(getOrderTaskTaskIdRoute, getOrderTaskTaskIdRouteHandler)
  .openapi(getScheduleRoute, getScheduleRouteHandler)
  .openapi(postScheduleRoute, postScheduleRouteHandler)
  .openapi(deleteScheduleScheduleIdRoute, deleteScheduleScheduleIdRouteHandler)
  .openapi(getScheduleScheduleIdRoute, getScheduleScheduleIdRouteHandler)
  .openapi(putScheduleScheduleIdRoute, putScheduleScheduleIdRouteHandler)
  .openapi(
    getScheduleScheduleIdDownloadResultFileRoute,
    getScheduleScheduleIdDownloadResultFileRouteHandler,
  )
  .openapi(getScheduleTemplateRoute, getScheduleTemplateRouteHandler)
  .openapi(
    getScheduleTemplateScheduleTemplateIdRoute,
    getScheduleTemplateScheduleTemplateIdRouteHandler,
  )
  .openapi(getTaskRoute, getTaskRouteHandler)
  .openapi(postTaskRoute, postTaskRouteHandler)
  .openapi(getTaskTaskIdRoute, getTaskTaskIdRouteHandler)
  .openapi(getTaskTaskIdDownloadInputFileRoute, getTaskTaskIdDownloadInputFileRouteHandler)
  .openapi(getTaskTaskIdDownloadResultFileRoute, getTaskTaskIdDownloadResultFileRouteHandler)
  .openapi(postTaskTaskIdUploadFileRoute, postTaskTaskIdUploadFileRouteHandler)

export default app
