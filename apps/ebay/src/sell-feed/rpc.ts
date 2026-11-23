import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCustomerServiceMetricTask(
  args: InferRequestType<typeof client.customer_service_metric_task.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customer_service_metric_task.$get(args, options))
}

export async function postCustomerServiceMetricTask(
  args: InferRequestType<typeof client.customer_service_metric_task.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customer_service_metric_task.$post(args, options))
}

export async function getCustomerServiceMetricTaskTaskId(
  args: InferRequestType<(typeof client.customer_service_metric_task)[':task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customer_service_metric_task[':task_id'].$get(args, options))
}

export async function getInventoryTask(
  args: InferRequestType<typeof client.inventory_task.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inventory_task.$get(args, options))
}

export async function postInventoryTask(
  args: InferRequestType<typeof client.inventory_task.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inventory_task.$post(args, options))
}

export async function getInventoryTaskTaskId(
  args: InferRequestType<(typeof client.inventory_task)[':task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inventory_task[':task_id'].$get(args, options))
}

export async function getOrderTask(
  args: InferRequestType<typeof client.order_task.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.order_task.$get(args, options))
}

export async function postOrderTask(
  args: InferRequestType<typeof client.order_task.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.order_task.$post(args, options))
}

export async function getOrderTaskTaskId(
  args: InferRequestType<(typeof client.order_task)[':task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.order_task[':task_id'].$get(args, options))
}

export async function getSchedule(
  args: InferRequestType<typeof client.schedule.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedule.$get(args, options))
}

export async function postSchedule(
  args: InferRequestType<typeof client.schedule.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedule.$post(args, options))
}

export async function getScheduleScheduleId(
  args: InferRequestType<(typeof client.schedule)[':schedule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedule[':schedule_id'].$get(args, options))
}

export async function putScheduleScheduleId(
  args: InferRequestType<(typeof client.schedule)[':schedule_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedule[':schedule_id'].$put(args, options))
}

export async function deleteScheduleScheduleId(
  args: InferRequestType<(typeof client.schedule)[':schedule_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedule[':schedule_id'].$delete(args, options))
}

export async function getScheduleScheduleIdDownloadResultFile(
  args: InferRequestType<(typeof client.schedule)[':schedule_id']['download_result_file']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.schedule[':schedule_id'].download_result_file.$get(args, options),
  )
}

export async function getScheduleTemplate(
  args: InferRequestType<typeof client.schedule_template.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedule_template.$get(args, options))
}

export async function getScheduleTemplateScheduleTemplateId(
  args: InferRequestType<(typeof client.schedule_template)[':schedule_template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedule_template[':schedule_template_id'].$get(args, options))
}

export async function getTask(
  args: InferRequestType<typeof client.task.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task.$get(args, options))
}

export async function postTask(
  args: InferRequestType<typeof client.task.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task.$post(args, options))
}

export async function getTaskTaskId(
  args: InferRequestType<(typeof client.task)[':task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task[':task_id'].$get(args, options))
}

export async function getTaskTaskIdDownloadInputFile(
  args: InferRequestType<(typeof client.task)[':task_id']['download_input_file']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task[':task_id'].download_input_file.$get(args, options))
}

export async function getTaskTaskIdDownloadResultFile(
  args: InferRequestType<(typeof client.task)[':task_id']['download_result_file']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task[':task_id'].download_result_file.$get(args, options))
}

export async function postTaskTaskIdUploadFile(
  args: InferRequestType<(typeof client.task)[':task_id']['upload_file']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task[':task_id'].upload_file.$post(args, options))
}
