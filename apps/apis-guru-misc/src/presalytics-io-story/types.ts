type PermissionType = {
  created_at?: string | undefined
  created_by?: string | undefined
  id?: string | undefined
  updated_at?: string | undefined
  updated_by?: string | undefined
  can_add_collaborators?: boolean | undefined
  can_delete?: boolean | undefined
  can_edit?: boolean | undefined
  can_view?: boolean | undefined
  name?: string | undefined
}
type StoryCollaborator = {
  created_at?: string | undefined
  created_by?: string | undefined
  id?: string | undefined
  updated_at?: string | undefined
  updated_by?: string | undefined
  active?: (boolean | null) | undefined
  email?: string | undefined
  lead_id?: (number | null) | undefined
  name?: string | undefined
  permission_type?: PermissionType | undefined
  permission_type_id?: string | undefined
  story_id?: string | undefined
  user_id?: string | undefined
}
type OoxmlDocument = {
  created_at?: string | undefined
  created_by?: string | undefined
  id?: string | undefined
  updated_at?: string | undefined
  updated_by?: string | undefined
  delete_target_on_story_delete?: boolean | undefined
  ooxml_automation_id?: string | undefined
  story_id?: string | undefined
}
type StoryOutlineHistory = {
  created_at?: string | undefined
  created_by?: string | undefined
  id?: string | undefined
  updated_at?: string | undefined
  updated_by?: string | undefined
  collaborator_user_id?: string | undefined
  outline?: string | undefined
  revision_number?: number | undefined
  story_id?: string | undefined
}
type Story = {
  created_at?: string | undefined
  created_by?: string | undefined
  id?: string | undefined
  updated_at?: string | undefined
  updated_by?: string | undefined
  collaborators?: StoryCollaborator[] | undefined
  is_public?: boolean | undefined
  ooxml_documents?: OoxmlDocument[] | undefined
  outline?: (string | null) | undefined
  outline_history?: StoryOutlineHistory[] | undefined
  revision?: number | undefined
  title?: string | undefined
}
type ProblemDetail = {
  detail?: string | undefined
  status?: number | undefined
  title?: string | undefined
  type?: string | undefined
}
type Outline = { outline?: string | undefined }
type CachePostRequest = {
  current_user_id?: string | undefined
  nonce?: string | undefined
  subdocument?: string | undefined
}
type CollaboratorBulkUpdateRequest = {
  active?: boolean | undefined
  lead_id?: number | undefined
  user_id?: string | undefined
}
type FileUpload = {
  content_length?: number | undefined
  file?: string | undefined
  file_name?: string | undefined
  mimetype?: string | undefined
}
type View = {
  created_at?: string | undefined
  created_by?: string | undefined
  id?: string | undefined
  updated_at?: string | undefined
  updated_by?: string | undefined
  active_msecs?: number | undefined
  additional?: string | undefined
  end_time?: string | undefined
  page_number?: number | undefined
  session_id?: string | undefined
  start_time?: string | undefined
  total_msecs?: number | undefined
}
type Session = {
  created_at?: string | undefined
  created_by?: string | undefined
  id?: string | undefined
  updated_at?: string | undefined
  updated_by?: string | undefined
  collaborator?: StoryCollaborator | undefined
  collaborator_id?: string | undefined
  host?: string | undefined
  outline_revision?: number | undefined
  views?: View[] | undefined
}
type AddNewCollaboratorRequest = {
  collaborator_type?: string | undefined
  user_email?: string | undefined
  user_id?: string | undefined
}
type ModifyInactiveCollaborator = {
  action?: string | undefined
  lead_id?: number | undefined
  user_id?: string | undefined
}
type Event = {
  created_at?: string | undefined
  created_by?: string | undefined
  id?: string | undefined
  updated_at?: string | undefined
  updated_by?: string | undefined
  attributes?: string | undefined
  chat_prompt?: string | undefined
  conversation_id?: string | undefined
  dom_selectors?: string | undefined
  is_chat_hidden?: boolean | undefined
  is_notify_enabled?: boolean | undefined
  name?: string | undefined
}
type ManageEvent = {
  action?: 'create' | 'fire' | 'change' | 'delete' | undefined
  action_params?: { [x: string]: unknown } | undefined
  name?: (string | null) | undefined
}
type Message = {
  body?: string | undefined
  id?: string | undefined
  remote?: boolean | undefined
  timestamp?: string | undefined
  userId?: string | undefined
  userName?: string | undefined
}
type Status = { status?: string | undefined }
type CreateSessionRequest = { collaboratorUserId?: string | undefined; host?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $get:
        | {
            input: {
              query: {
                include_relationships?: boolean | undefined
                include_outline?: boolean | undefined
              }
            }
            output: Story[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include_relationships?: boolean | undefined
                include_outline?: boolean | undefined
              }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                include_relationships?: boolean | undefined
                include_outline?: boolean | undefined
              }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include_relationships?: boolean | undefined
                include_outline?: boolean | undefined
              }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { query: { include_outline?: boolean | undefined } } & { json: Outline }
            output: Story
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include_outline?: boolean | undefined } } & { json: Outline }
            output: ProblemDetail
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { include_outline?: boolean | undefined } } & { json: Outline }
            output: ProblemDetail
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/cache': {
      $post:
        | { input: { json: CachePostRequest }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: CachePostRequest }
            output: ProblemDetail
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CachePostRequest }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CachePostRequest }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/cache/:nonce': {
      $get:
        | { input: { param: { nonce: string } }; output: string; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { nonce: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { nonce: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { nonce: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/collaborators': {
      $post:
        | {
            input: { json: CollaboratorBulkUpdateRequest }
            output: PermissionType[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CollaboratorBulkUpdateRequest }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CollaboratorBulkUpdateRequest }
            output: ProblemDetail
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CollaboratorBulkUpdateRequest }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/environment/': {
      $get:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ProblemDetail; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ProblemDetail; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/file': {
      $post:
        | {
            input: { query: { include_outline?: boolean | undefined } } & {
              form: { file?: File[] | undefined }
            }
            output: Story
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include_outline?: boolean | undefined } } & {
              form: { file?: File[] | undefined }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { include_outline?: boolean | undefined } } & {
              form: { file?: File[] | undefined }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/file/json': {
      $post:
        | {
            input: { query: { include_outline?: boolean | undefined } } & { json: FileUpload }
            output: Story
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include_outline?: boolean | undefined } } & { json: FileUpload }
            output: ProblemDetail
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { include_outline?: boolean | undefined } } & { json: FileUpload }
            output: ProblemDetail
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/no_tags_spec': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: ProblemDetail; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/outline-schema/:schema_version/story-outline.json': {
      $get:
        | {
            input: { param: { schema_version: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { schema_version: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/permission_types': {
      $get:
        | { input: {}; output: PermissionType[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ProblemDetail; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ProblemDetail; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ProblemDetail; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/sessions/:session_id': {
      $delete:
        | {
            input: { param: { session_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { session_id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { session_id: string } } & {
              query: { include_relationships?: boolean | undefined }
            }
            output: Session
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } } & {
              query: { include_relationships?: boolean | undefined }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string } } & {
              query: { include_relationships?: boolean | undefined }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string } } & {
              query: { include_relationships?: boolean | undefined }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/sessions/:session_id/views': {
      $get:
        | {
            input: { param: { session_id: string } }
            output: View[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { session_id: string } } & {
              json: {
                activeMSecs?: number | undefined
                additional?: string | undefined
                endTime: string
                pageNumber: number
                startTime: string
              }
            }
            output: View
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } } & {
              json: {
                activeMSecs?: number | undefined
                additional?: string | undefined
                endTime: string
                pageNumber: number
                startTime: string
              }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string } } & {
              json: {
                activeMSecs?: number | undefined
                additional?: string | undefined
                endTime: string
                pageNumber: number
                startTime: string
              }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string } } & {
              json: {
                activeMSecs?: number | undefined
                additional?: string | undefined
                endTime: string
                pageNumber: number
                startTime: string
              }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/views/:view_id': {
      $delete:
        | { input: { param: { view_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { view_id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { view_id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { view_id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
      $get:
        | { input: { param: { view_id: string } }; output: View; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { view_id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { view_id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { view_id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                include_relationships?: boolean | undefined
                include_outline?: boolean | undefined
                full?: boolean | undefined
                refresh_cache?: boolean | undefined
              }
            }
            output: Story
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include_relationships?: boolean | undefined
                include_outline?: boolean | undefined
                full?: boolean | undefined
                refresh_cache?: boolean | undefined
              }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include_relationships?: boolean | undefined
                include_outline?: boolean | undefined
                full?: boolean | undefined
                refresh_cache?: boolean | undefined
              }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include_relationships?: boolean | undefined
                include_outline?: boolean | undefined
                full?: boolean | undefined
                refresh_cache?: boolean | undefined
              }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { include_outline?: boolean | undefined }
            } & { json: Story }
            output: Story
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include_outline?: boolean | undefined }
            } & { json: Story }
            output: ProblemDetail
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { include_outline?: boolean | undefined }
            } & { json: Story }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include_outline?: boolean | undefined }
            } & { json: Story }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/:id/analytics': {
      $get:
        | { input: { param: { id: string } }; output: string; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 400
          }
        | { input: { param: { id: string } }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { param: { id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/:id/collaborators': {
      $get:
        | {
            input: { param: { id: string } }
            output: StoryCollaborator[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & { json: AddNewCollaboratorRequest }
            output: StoryCollaborator
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AddNewCollaboratorRequest }
            output: ProblemDetail
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: AddNewCollaboratorRequest }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: AddNewCollaboratorRequest }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/:id/collaborators/authorize/:story_collaborator_userid/:permissiontype': {
      $get:
        | {
            input: {
              param: { id: string; story_collaborator_userid: string; permissiontype: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { id: string; story_collaborator_userid: string; permissiontype: string }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { id: string; story_collaborator_userid: string; permissiontype: string }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { id: string; story_collaborator_userid: string; permissiontype: string }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/:id/collaborators/inactive': {
      $post:
        | {
            input: { param: { id: string } } & { json: ModifyInactiveCollaborator }
            output: StoryCollaborator
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ModifyInactiveCollaborator }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: ModifyInactiveCollaborator }
            output: ProblemDetail
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: ModifyInactiveCollaborator }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: ModifyInactiveCollaborator }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/:id/collaborators/:story_collaborator_userid': {
      $delete:
        | {
            input: { param: { id: string; story_collaborator_userid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string; story_collaborator_userid: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; story_collaborator_userid: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; story_collaborator_userid: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string; story_collaborator_userid: string } }
            output: StoryCollaborator
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; story_collaborator_userid: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; story_collaborator_userid: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; story_collaborator_userid: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string; story_collaborator_userid: string } } & {
              json: StoryCollaborator
            }
            output: StoryCollaborator
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; story_collaborator_userid: string } } & {
              json: StoryCollaborator
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; story_collaborator_userid: string } } & {
              json: StoryCollaborator
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; story_collaborator_userid: string } } & {
              json: StoryCollaborator
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/:id/events': {
      $get:
        | { input: { param: { id: string } }; output: Event[]; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { param: { id: string } } & { json: ManageEvent }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ManageEvent }
            output: ProblemDetail
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: ManageEvent }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: ManageEvent }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/:id/file': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: {
                replace_existing?: boolean | undefined
                obsolete_id?: string | undefined
                include_outline?: boolean | undefined
              }
            } & { form: { file?: File[] | undefined } }
            output: Story
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                replace_existing?: boolean | undefined
                obsolete_id?: string | undefined
                include_outline?: boolean | undefined
              }
            } & { form: { file?: File[] | undefined } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              query: {
                replace_existing?: boolean | undefined
                obsolete_id?: string | undefined
                include_outline?: boolean | undefined
              }
            } & { form: { file?: File[] | undefined } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/:id/file/:ooxml_automation_id': {
      $delete:
        | {
            input: { param: { id: string; ooxml_automation_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string; ooxml_automation_id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; ooxml_automation_id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; ooxml_automation_id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string; ooxml_automation_id: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string; ooxml_automation_id: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string; ooxml_automation_id: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string; ooxml_automation_id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; ooxml_automation_id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; ooxml_automation_id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/:id/messages': {
      $get:
        | { input: { param: { id: string } }; output: Message[]; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { param: { id: string } } & { json: string }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: string }
            output: ProblemDetail
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: string }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: string }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/:id/outline': {
      $get:
        | { input: { param: { id: string } }; output: string; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Status; outputFormat: 'json'; status: 202 }
        | {
            input: { param: { id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 410 }
      $post:
        | {
            input: { param: { id: string } } & { json: string }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: string }
            output: ProblemDetail
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: string }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: string }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/:id/public/': {
      $get:
        | { input: { param: { id: string } }; output: string; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 302 }
        | {
            input: { param: { id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/:id/reveal': {
      $get:
        | { input: { param: { id: string } }; output: string; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 400
          }
        | { input: { param: { id: string } }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { param: { id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/:id/sessions': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { include_relationships?: boolean | undefined }
            }
            output: Session[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include_relationships?: boolean | undefined }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include_relationships?: boolean | undefined }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include_relationships?: boolean | undefined }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & { json: CreateSessionRequest }
            output: Session
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: CreateSessionRequest }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: CreateSessionRequest }
            output: ProblemDetail
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: CreateSessionRequest }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/:id/status': {
      $get:
        | { input: { param: { id: string } }; output: Status; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
