type CustomerServiceMetricsFilterCriteria = {
  customerServiceMetricType?: string | undefined
  evaluationMarketplaceId?: string | undefined
  listingCategories?: string[] | undefined
  shippingRegions?: string[] | undefined
}
type ServiceMetricsTask = {
  completionDate?: string | undefined
  creationDate?: string | undefined
  detailHref?: string | undefined
  feedType?: string | undefined
  filterCriteria?: CustomerServiceMetricsFilterCriteria | undefined
  schemaVersion?: string | undefined
  status?: string | undefined
  taskId?: string | undefined
}
type CustomerServiceMetricTaskCollection = {
  href?: string | undefined
  limit?: number | undefined
  next?: string | undefined
  offset?: number | undefined
  prev?: string | undefined
  tasks?: ServiceMetricsTask[] | undefined
  total?: number | undefined
}
type CreateServiceMetricsTaskRequest = {
  feedType?: string | undefined
  filterCriteria?: CustomerServiceMetricsFilterCriteria | undefined
  schemaVersion?: string | undefined
}
type InventoryFilterCriteria = { listingFormat?: string | undefined }
type UploadSummary = { failureCount?: number | undefined; successCount?: number | undefined }
type InventoryTask = {
  completionDate?: string | undefined
  creationDate?: string | undefined
  detailHref?: string | undefined
  feedType?: string | undefined
  filterCriteria?: InventoryFilterCriteria | undefined
  schemaVersion?: string | undefined
  status?: string | undefined
  taskId?: string | undefined
  uploadSummary?: UploadSummary | undefined
}
type InventoryTaskCollection = {
  href?: string | undefined
  limit?: number | undefined
  next?: string | undefined
  offset?: number | undefined
  prev?: string | undefined
  tasks?: InventoryTask[] | undefined
  total?: number | undefined
}
type CreateInventoryTaskRequest = {
  feedType?: string | undefined
  filterCriteria?: InventoryFilterCriteria | undefined
  schemaVersion?: string | undefined
}
type DateRange = { from?: string | undefined; to?: string | undefined }
type OrderFilterCriteria = {
  creationDateRange?: DateRange | undefined
  modifiedDateRange?: DateRange | undefined
  orderStatus?: string | undefined
}
type OrderTask = {
  completionDate?: string | undefined
  creationDate?: string | undefined
  detailHref?: string | undefined
  feedType?: string | undefined
  filterCriteria?: OrderFilterCriteria | undefined
  schemaVersion?: string | undefined
  status?: string | undefined
  taskId?: string | undefined
  uploadSummary?: UploadSummary | undefined
}
type OrderTaskCollection = {
  href?: string | undefined
  limit?: number | undefined
  next?: string | undefined
  offset?: number | undefined
  prev?: string | undefined
  tasks?: OrderTask[] | undefined
  total?: number | undefined
}
type CreateOrderTaskRequest = {
  feedType?: string | undefined
  filterCriteria?: OrderFilterCriteria | undefined
  schemaVersion?: string | undefined
}
type UserScheduleResponse = {
  creationDate?: string | undefined
  feedType?: string | undefined
  lastModifiedDate?: string | undefined
  preferredTriggerDayOfMonth?: number | undefined
  preferredTriggerDayOfWeek?: string | undefined
  preferredTriggerHour?: string | undefined
  scheduleEndDate?: string | undefined
  scheduleId?: string | undefined
  scheduleName?: string | undefined
  scheduleStartDate?: string | undefined
  scheduleTemplateId?: string | undefined
  schemaVersion?: string | undefined
  status?: string | undefined
  statusReason?: string | undefined
}
type UserScheduleCollection = {
  href?: string | undefined
  limit?: number | undefined
  next?: string | undefined
  offset?: number | undefined
  prev?: string | undefined
  schedules?: UserScheduleResponse[] | undefined
  total?: number | undefined
}
type CreateUserScheduleRequest = {
  feedType?: string | undefined
  preferredTriggerDayOfMonth?: number | undefined
  preferredTriggerDayOfWeek?: string | undefined
  preferredTriggerHour?: string | undefined
  scheduleEndDate?: string | undefined
  scheduleName?: string | undefined
  scheduleStartDate?: string | undefined
  scheduleTemplateId?: string | undefined
  schemaVersion?: string | undefined
}
type UpdateUserScheduleRequest = {
  preferredTriggerDayOfMonth?: number | undefined
  preferredTriggerDayOfWeek?: string | undefined
  preferredTriggerHour?: string | undefined
  scheduleEndDate?: string | undefined
  scheduleName?: string | undefined
  scheduleStartDate?: string | undefined
  schemaVersion?: string | undefined
}
type StreamingOutput = { [x: string]: unknown }
type SupportedConfiguration = {
  defaultValue?: string | undefined
  property?: string | undefined
  usage?: string | undefined
}
type ScheduleTemplateResponse = {
  feedType?: string | undefined
  frequency?: string | undefined
  name?: string | undefined
  scheduleTemplateId?: string | undefined
  status?: string | undefined
  supportedConfigurations?: SupportedConfiguration[] | undefined
}
type ScheduleTemplateCollection = {
  href?: string | undefined
  limit?: number | undefined
  next?: string | undefined
  offset?: number | undefined
  prev?: string | undefined
  scheduleTemplates?: ScheduleTemplateResponse[] | undefined
  total?: number | undefined
}
type Task = {
  completionDate?: string | undefined
  creationDate?: string | undefined
  detailHref?: string | undefined
  feedType?: string | undefined
  schemaVersion?: string | undefined
  status?: string | undefined
  taskId?: string | undefined
  uploadSummary?: UploadSummary | undefined
}
type TaskCollection = {
  href?: string | undefined
  limit?: number | undefined
  next?: string | undefined
  offset?: number | undefined
  prev?: string | undefined
  tasks?: Task[] | undefined
  total?: number | undefined
}
type CreateTaskRequest = { feedType?: string | undefined; schemaVersion?: string | undefined }
type FormDataContentDisposition = {
  creationDate?: string | undefined
  fileName?: string | undefined
  modificationDate?: string | undefined
  name?: string | undefined
  parameters?: { [x: string]: string } | undefined
  readDate?: string | undefined
  size?: number | undefined
  type?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/customer_service_metric_task': {
      $get:
        | {
            input: {
              query: {
                date_range?: string | undefined
                feed_type?: string | undefined
                limit?: string | undefined
                look_back_days?: string | undefined
                offset?: string | undefined
              }
            }
            output: CustomerServiceMetricTaskCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                date_range?: string | undefined
                feed_type?: string | undefined
                limit?: string | undefined
                look_back_days?: string | undefined
                offset?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                date_range?: string | undefined
                feed_type?: string | undefined
                limit?: string | undefined
                look_back_days?: string | undefined
                offset?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                date_range?: string | undefined
                feed_type?: string | undefined
                limit?: string | undefined
                look_back_days?: string | undefined
                offset?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { header: { 'accept-language': string } } & {
              json: CreateServiceMetricsTaskRequest
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { 'accept-language': string } } & {
              json: CreateServiceMetricsTaskRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'accept-language': string } } & {
              json: CreateServiceMetricsTaskRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'accept-language': string } } & {
              json: CreateServiceMetricsTaskRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/customer_service_metric_task/:task_id': {
      $get:
        | {
            input: { param: { task_id: string } }
            output: ServiceMetricsTask
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/inventory_task': {
      $get:
        | {
            input: {
              query: {
                feed_type?: string | undefined
                schedule_id?: string | undefined
                look_back_days?: string | undefined
                date_range?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            }
            output: InventoryTaskCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                feed_type?: string | undefined
                schedule_id?: string | undefined
                look_back_days?: string | undefined
                date_range?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                feed_type?: string | undefined
                schedule_id?: string | undefined
                look_back_days?: string | undefined
                date_range?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                feed_type?: string | undefined
                schedule_id?: string | undefined
                look_back_days?: string | undefined
                date_range?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { json: CreateInventoryTaskRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { json: CreateInventoryTaskRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: CreateInventoryTaskRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: CreateInventoryTaskRequest }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { json: CreateInventoryTaskRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/inventory_task/:task_id': {
      $get:
        | {
            input: { param: { task_id: string } }
            output: InventoryTask
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/order_task': {
      $get:
        | {
            input: {
              query: {
                date_range?: string | undefined
                feed_type?: string | undefined
                limit?: string | undefined
                look_back_days?: string | undefined
                offset?: string | undefined
                schedule_id?: string | undefined
              }
            }
            output: OrderTaskCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                date_range?: string | undefined
                feed_type?: string | undefined
                limit?: string | undefined
                look_back_days?: string | undefined
                offset?: string | undefined
                schedule_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                date_range?: string | undefined
                feed_type?: string | undefined
                limit?: string | undefined
                look_back_days?: string | undefined
                offset?: string | undefined
                schedule_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                date_range?: string | undefined
                feed_type?: string | undefined
                limit?: string | undefined
                look_back_days?: string | undefined
                offset?: string | undefined
                schedule_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | { input: { json: CreateOrderTaskRequest }; output: {}; outputFormat: string; status: 202 }
        | { input: { json: CreateOrderTaskRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: CreateOrderTaskRequest }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: CreateOrderTaskRequest }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: CreateOrderTaskRequest }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/order_task/:task_id': {
      $get:
        | {
            input: { param: { task_id: string } }
            output: OrderTask
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/schedule': {
      $get:
        | {
            input: {
              query: { feed_type: string; limit?: string | undefined; offset?: string | undefined }
            }
            output: UserScheduleCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { feed_type: string; limit?: string | undefined; offset?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: { feed_type: string; limit?: string | undefined; offset?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: { feed_type: string; limit?: string | undefined; offset?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { json: CreateUserScheduleRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateUserScheduleRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: CreateUserScheduleRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: CreateUserScheduleRequest }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { json: CreateUserScheduleRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/schedule/:schedule_id': {
      $delete:
        | {
            input: { param: { schedule_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { schedule_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { schedule_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { schedule_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { schedule_id: string } }
            output: UserScheduleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { schedule_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { schedule_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { schedule_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { schedule_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { schedule_id: string } } & { json: UpdateUserScheduleRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { schedule_id: string } } & { json: UpdateUserScheduleRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { schedule_id: string } } & { json: UpdateUserScheduleRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { schedule_id: string } } & { json: UpdateUserScheduleRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { schedule_id: string } } & { json: UpdateUserScheduleRequest }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { schedule_id: string } } & { json: UpdateUserScheduleRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/schedule/:schedule_id/download_result_file': {
      $get:
        | {
            input: { param: { schedule_id: string } }
            output: StreamingOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { schedule_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { schedule_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { schedule_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { schedule_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/schedule_template': {
      $get:
        | {
            input: {
              query: { feed_type: string; limit?: string | undefined; offset?: string | undefined }
            }
            output: ScheduleTemplateCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { feed_type: string; limit?: string | undefined; offset?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: { feed_type: string; limit?: string | undefined; offset?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/schedule_template/:schedule_template_id': {
      $get:
        | {
            input: { param: { schedule_template_id: string } }
            output: ScheduleTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { schedule_template_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { schedule_template_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { schedule_template_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/task': {
      $get:
        | {
            input: {
              query: {
                date_range?: string | undefined
                feed_type?: string | undefined
                limit?: string | undefined
                look_back_days?: string | undefined
                offset?: string | undefined
                schedule_id?: string | undefined
              }
            }
            output: TaskCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                date_range?: string | undefined
                feed_type?: string | undefined
                limit?: string | undefined
                look_back_days?: string | undefined
                offset?: string | undefined
                schedule_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                date_range?: string | undefined
                feed_type?: string | undefined
                limit?: string | undefined
                look_back_days?: string | undefined
                offset?: string | undefined
                schedule_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                date_range?: string | undefined
                feed_type?: string | undefined
                limit?: string | undefined
                look_back_days?: string | undefined
                offset?: string | undefined
                schedule_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { header: { 'X-EBAY-C-MARKETPLACE-ID'?: string | undefined } } & {
              json: CreateTaskRequest
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { 'X-EBAY-C-MARKETPLACE-ID'?: string | undefined } } & {
              json: CreateTaskRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-EBAY-C-MARKETPLACE-ID'?: string | undefined } } & {
              json: CreateTaskRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-EBAY-C-MARKETPLACE-ID'?: string | undefined } } & {
              json: CreateTaskRequest
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { header: { 'X-EBAY-C-MARKETPLACE-ID'?: string | undefined } } & {
              json: CreateTaskRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/task/:task_id': {
      $get:
        | { input: { param: { task_id: string } }; output: Task; outputFormat: 'json'; status: 200 }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/task/:task_id/download_input_file': {
      $get:
        | {
            input: { param: { task_id: string } }
            output: StreamingOutput
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/task/:task_id/download_result_file': {
      $get:
        | {
            input: { param: { task_id: string } }
            output: StreamingOutput
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/task/:task_id/upload_file': {
      $post:
        | {
            input: { param: { task_id: string } } & { form: FormDataContentDisposition }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_id: string } } & { form: FormDataContentDisposition }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { task_id: string } } & { form: FormDataContentDisposition }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { task_id: string } } & { form: FormDataContentDisposition }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { task_id: string } } & { form: FormDataContentDisposition }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
