type WidgetMetadataResponse = {
  template: 'summary_with_details_v0'
  metadata: {
    title: string
    fields: unknown[]
    subtitle?: string | undefined
    subicon_url?: string | undefined
    footer: { [x: string]: unknown }
    num_comments?: number | undefined
  }
}
type BadRequestResponse = { error?: string | undefined }
type UnauthorizedResponse = { error?: string | undefined }
type ForbiddenResponse = { error?: string | undefined }
type NotFoundResponse = { error?: string | undefined }
type InternalServerErrorResponse = { error?: string | undefined }
type AttachResourceRequest = {
  expires_at?: string | undefined
  user?: string | undefined
  workspace?: string | undefined
  task?: string | undefined
  attachment?: string | undefined
  query?: string | undefined
}
type AttachedResourceResponse = {
  resource_name: string
  resource_url: string
  error?: string | undefined
}
type TypeaheadListRequest = {
  expires_at?: string | undefined
  user?: string | undefined
  workspace?: string | undefined
  query?: string | undefined
  task?: string | undefined
}
type TypeaheadItem = {
  title: string
  subtitle?: string | undefined
  value: string
  icon_url?: string | undefined
}
type TypeaheadListResponse = { header?: string | undefined; items: TypeaheadItem[] }
type FormMetadataResponse = {
  template: 'form_metadata_v0'
  metadata: {
    title: string
    fields: unknown[]
    on_submit_callback?: string | undefined
    on_change_callback?: string | undefined
  }
}
type FormOnChangeRequest = {
  expires_at?: string | undefined
  user?: string | undefined
  workspace?: string | undefined
  values?: { [x: string]: unknown } | undefined
  changed_field?: string | undefined
  task?: string | undefined
}
type OnSubmitCallbackRequest = {
  expires_at?: string | undefined
  user?: string | undefined
  workspace?: string | undefined
  values?: { [x: string]: unknown } | undefined
  task?: string | undefined
  attachment?: string | undefined
}
type RunActionRequest = {
  expires_at?: string | undefined
  user?: string | undefined
  workspace?: string | undefined
  project?: string | undefined
  target_object?: string | undefined
  action?: string | undefined
  action_type?: string | undefined
  idempotency_key: string
}
type RanActionResponse = {
  error?: string | undefined
  action_result: 'resources_created' | 'ok'
  resources_created?: AttachedResourceResponse[] | undefined
}
type ActionFormOnChangeRequest = {
  expires_at?: string | undefined
  user?: string | undefined
  workspace?: string | undefined
  values?: { [x: string]: unknown } | undefined
  changed_field?: string | undefined
  action?: string | undefined
  action_type?: string | undefined
  project?: string | undefined
}
type ActionFormSubmissionRequest = {
  expires_at?: string | undefined
  user?: string | undefined
  workspace?: string | undefined
  values?: { [x: string]: unknown } | undefined
  task?: string | undefined
  rule_name?: string | undefined
  action?: string | undefined
  action_type?: string | undefined
  project?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/widget_metadata_url_path_placeholder': {
      $get:
        | {
            input: {
              query: {
                resource_url: string
                workspace: string
                task: string
                user: string
                attachment: string
                expires_at: string
              }
            }
            output: WidgetMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                resource_url: string
                workspace: string
                task: string
                user: string
                attachment: string
                expires_at: string
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                resource_url: string
                workspace: string
                task: string
                user: string
                attachment: string
                expires_at: string
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                resource_url: string
                workspace: string
                task: string
                user: string
                attachment: string
                expires_at: string
              }
            }
            output: ForbiddenResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                resource_url: string
                workspace: string
                task: string
                user: string
                attachment: string
                expires_at: string
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                resource_url: string
                workspace: string
                task: string
                user: string
                attachment: string
                expires_at: string
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 418
          }
        | {
            input: {
              query: {
                resource_url: string
                workspace: string
                task: string
                user: string
                attachment: string
                expires_at: string
              }
            }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/resource_attach_url_path_placeholder': {
      $post:
        | {
            input: { json: AttachResourceRequest }
            output: AttachedResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AttachResourceRequest }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AttachResourceRequest }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AttachResourceRequest }
            output: ForbiddenResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AttachResourceRequest }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: AttachResourceRequest }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/resource_typeahead_url_path_placeholder': {
      $get:
        | {
            input: { json: TypeaheadListRequest }
            output: TypeaheadListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TypeaheadListRequest }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TypeaheadListRequest }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TypeaheadListRequest }
            output: ForbiddenResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: TypeaheadListRequest }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: TypeaheadListRequest }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/form_metadata_url_path_placeholder': {
      $get:
        | {
            input: { query: { workspace: string; task: string; user: string; expires_at: string } }
            output: FormMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { workspace: string; task: string; user: string; expires_at: string } }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { workspace: string; task: string; user: string; expires_at: string } }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { workspace: string; task: string; user: string; expires_at: string } }
            output: ForbiddenResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { workspace: string; task: string; user: string; expires_at: string } }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { workspace: string; task: string; user: string; expires_at: string } }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/modal_form_typeahead_url_path_placeholder': {
      $get:
        | {
            input: { json: TypeaheadListRequest }
            output: TypeaheadListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TypeaheadListRequest }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TypeaheadListRequest }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TypeaheadListRequest }
            output: ForbiddenResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: TypeaheadListRequest }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: TypeaheadListRequest }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/rule_action_typeahead_url_path_placeholder': {
      $get:
        | {
            input: { json: TypeaheadListRequest }
            output: TypeaheadListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TypeaheadListRequest }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TypeaheadListRequest }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TypeaheadListRequest }
            output: ForbiddenResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: TypeaheadListRequest }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: TypeaheadListRequest }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/on_change_callback_path_placeholder': {
      $post:
        | {
            input: { json: FormOnChangeRequest }
            output: FormMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: FormOnChangeRequest }
            output: FormMetadataResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: FormOnChangeRequest }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: FormOnChangeRequest }
            output: ForbiddenResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: FormOnChangeRequest }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: FormOnChangeRequest }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/on_submit_callback_path_placeholder': {
      $post:
        | {
            input: { json: OnSubmitCallbackRequest }
            output: AttachedResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OnSubmitCallbackRequest }
            output: FormMetadataResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: OnSubmitCallbackRequest }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: OnSubmitCallbackRequest }
            output: ForbiddenResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: OnSubmitCallbackRequest }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: OnSubmitCallbackRequest }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/run_action_url_path_placeholder': {
      $post:
        | {
            input: { json: RunActionRequest }
            output: RanActionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RunActionRequest }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RunActionRequest }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: RunActionRequest }
            output: ForbiddenResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: RunActionRequest }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | { input: { json: RunActionRequest }; output: {}; outputFormat: string; status: 410 }
        | {
            input: { json: RunActionRequest }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/action.metadata_url_path_placeholder': {
      $get:
        | {
            input: {
              query: {
                action?: string | undefined
                action_type: string
                project: string
                workspace: string
                user: string
                expires_at: string
              }
            }
            output: FormMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                action?: string | undefined
                action_type: string
                project: string
                workspace: string
                user: string
                expires_at: string
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                action?: string | undefined
                action_type: string
                project: string
                workspace: string
                user: string
                expires_at: string
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                action?: string | undefined
                action_type: string
                project: string
                workspace: string
                user: string
                expires_at: string
              }
            }
            output: ForbiddenResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                action?: string | undefined
                action_type: string
                project: string
                workspace: string
                user: string
                expires_at: string
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                action?: string | undefined
                action_type: string
                project: string
                workspace: string
                user: string
                expires_at: string
              }
            }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/action.on_change_callback_path_placeholder': {
      $post:
        | {
            input: { json: ActionFormOnChangeRequest }
            output: FormMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ActionFormOnChangeRequest }
            output: FormMetadataResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ActionFormOnChangeRequest }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ActionFormOnChangeRequest }
            output: ForbiddenResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ActionFormOnChangeRequest }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ActionFormOnChangeRequest }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/action.on_submit_callback_path_placeholder': {
      $post:
        | {
            input: { json: ActionFormSubmissionRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: ActionFormSubmissionRequest }
            output: FormMetadataResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ActionFormSubmissionRequest }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ActionFormSubmissionRequest }
            output: ForbiddenResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ActionFormSubmissionRequest }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ActionFormSubmissionRequest }
            output: InternalServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
