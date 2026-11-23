type ActionSend = {
  config: { html?: string | undefined; subject: string; text?: string | undefined; type: string }
  createdAt: string
  createdBy: string
  id: string
  name: string
  output: string
  owner: string
}
type ActionCombine = {
  createdAt: string
  createdBy: string
  id: string
  list?: string[] | undefined
  name: string
  owner: string
}
type GetAllActionsResponse = { list: (ActionSend | ActionCombine)[] }
type ErrorResponse = { error: string }
type AddActionCombineRequest = { list: string[]; name: string }
type AddActionSmsRequest = { config: { number: string; text: string }; name: string; type: 'sms' }
type AddActionWebhookRequest = {
  config: {
    body: string
    opts: { headers: { [x: string]: unknown }; method: 'POST' | 'GET' | 'DELETE' }
    url: string
  }
  name: string
  type: 'webhook'
}
type AddActionDaemonRequest = {
  config: { body: string; daemon?: string | undefined }
  name: string
  type: 'daemon'
}
type AddActionSendRequest = {
  config: {
    from: string
    html?: string | undefined
    key: string
    subject: string
    text?: string | undefined
    to?: string | undefined
    type?: 'send' | undefined
  }
  name: string
  type: 'mailscript-email'
}
type AddActionForwardRequest = {
  config: { forward: string; from: string; key: string; type: 'forward' }
  name: string
  type: 'mailscript-email'
}
type AddActionReplyRequest = {
  config: {
    from: string
    html?: string | undefined
    key: string
    text?: string | undefined
    type: 'reply'
  }
  name: string
  type: 'mailscript-email'
}
type AddActionReplyAllRequest = {
  config: {
    from: string
    html?: string | undefined
    key: string
    text?: string | undefined
    type: 'replyAll'
  }
  name: string
  type: 'mailscript-email'
}
type AddActionAliasRequest = {
  config: { alias?: string | undefined; type?: 'alias' | undefined }
  name: string
  type: 'mailscript-email'
}
type AddActionResponse = { id: string }
type Key = {
  createdAt: string
  createdBy: string
  id: string
  name: string
  read: boolean
  write: boolean
}
type Address = {
  createdAt: string
  createdBy: string
  displayName?: string | undefined
  id: string
  owner: string
}
type GetAllAddressesResponse = { list: Address[] }
type AddAddressRequest = { address: string }
type GetAllKeysResponse = { list: Key[] }
type AddKeyRequest = { name: string; read: boolean; write: boolean }
type AddKeyResponse = { id?: string | undefined }
type UpdateKeyRequest = { name: string; read: boolean; write: boolean }
type GetAllDomainsResponse = { id?: string[] | undefined }
type AddDomainRequest = { domain: string }
type DomainResponse = { domain: string; records: { name: string; type: string; value: string }[] }
type CheckDomainVerify = { domain: string; success: boolean }
type MailscriptEmailInput = {
  address: string
  createdAt: string
  createdBy: string
  id: string
  name: string
  owner: string
  type: 'mailescript-email'
}
type GetAllInputsResponse = { list: MailscriptEmailInput[] }
type Integration = { createdAt: string; id: string; type: 'google' }
type GetAllIntegrationsResponse = { list: Integration[] }
type SendRequest = {
  from: string
  html?: string | undefined
  subject: string
  text?: string | undefined
  to: string
}
type Criteria = {
  domain?: string | undefined
  from?: string | undefined
  hasAttachments?: boolean | undefined
  hasTheWords?: string | undefined
  sentTo?: string | undefined
  subjectContains?: string | undefined
}
type Trigger = {
  createdAt: string
  createdBy: string
  criteria: Criteria
  displayName?: string | undefined
  id: string
  name: string
  owner: string
}
type GetAllTriggersResponse = { list: Trigger[] }
type CriteriaOperand = { and?: string[] | undefined; or?: string[] | undefined }
type AddTriggerRequest = { criteria: Criteria | CriteriaOperand; name: string }
type AddTriggerResponse = { id: string }
type User = {
  createdAt: string
  displayName: string
  email: string
  id: string
  photoURL?: string | undefined
}
type UpdateUserRequest = { displayName: string }
type VerificationEmail = {
  email?: string | undefined
  id?: string | undefined
  type?: 'email' | undefined
  verified?: boolean | undefined
  verifiedAt?: string | undefined
  verifiedBy?: string | undefined
}
type VerificationSms = {
  id?: string | undefined
  sms?: string | undefined
  type?: 'sms' | undefined
  verified?: boolean | undefined
  verifiedAt?: string | undefined
  verifiedBy?: string | undefined
}
type GetAllVerificationsResponse = { list: (VerificationEmail | VerificationSms)[] }
type AddEmailVerificationRequest = { email: string; type: 'email' }
type AddSmsVerificationRequest = { sms: string; type: 'sms' }
type AddVerificationResponse = { id: string }
type VerifyEmailRequest = { code: string; email: string }
type VerifySmsRequest = { code: string; sms: string }
type Workflow = {
  action: string
  active?: boolean | undefined
  createdAt: string
  createdBy: string
  id: string
  input: string
  name: string
  owner: string
  trigger: string
}
type GetAllWorkflowsResponse = { list: Workflow[] }
type AddWorkflowRequest = {
  action: string
  active?: boolean | undefined
  input: string
  name: string
  trigger?: string | undefined
}
type KeyValuePair = { key: string; value: string }
type SetWorkflowRequest = { id?: string | undefined; pairs?: KeyValuePair[] | undefined }
type Workspace = { createdAt: string; createdBy: string; id: string; owner: string }
type GetAllWorkspacesResponse = { list: Workspace[] }
type AddWorkspaceRequest = { workspace: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/actions': {
      $get:
        | { input: {}; output: GetAllActionsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 403 }
      $post:
        | {
            input: {
              json:
                | AddActionCombineRequest
                | AddActionSmsRequest
                | AddActionWebhookRequest
                | AddActionDaemonRequest
                | AddActionSendRequest
                | AddActionForwardRequest
                | AddActionForwardRequest
                | AddActionReplyRequest
                | AddActionReplyAllRequest
                | AddActionAliasRequest
            }
            output: AddActionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json:
                | AddActionCombineRequest
                | AddActionSmsRequest
                | AddActionWebhookRequest
                | AddActionDaemonRequest
                | AddActionSendRequest
                | AddActionForwardRequest
                | AddActionForwardRequest
                | AddActionReplyRequest
                | AddActionReplyAllRequest
                | AddActionAliasRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json:
                | AddActionCombineRequest
                | AddActionSmsRequest
                | AddActionWebhookRequest
                | AddActionDaemonRequest
                | AddActionSendRequest
                | AddActionForwardRequest
                | AddActionForwardRequest
                | AddActionReplyRequest
                | AddActionReplyAllRequest
                | AddActionAliasRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/actions/:action': {
      $delete:
        | { input: { param: { action: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { action: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { action: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { action: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { action: string } } & {
              json:
                | AddActionCombineRequest
                | AddActionSmsRequest
                | AddActionWebhookRequest
                | AddActionDaemonRequest
                | AddActionSendRequest
                | AddActionForwardRequest
                | AddActionForwardRequest
                | AddActionReplyRequest
                | AddActionReplyAllRequest
                | AddActionAliasRequest
            }
            output: Key
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { action: string } } & {
              json:
                | AddActionCombineRequest
                | AddActionSmsRequest
                | AddActionWebhookRequest
                | AddActionDaemonRequest
                | AddActionSendRequest
                | AddActionForwardRequest
                | AddActionForwardRequest
                | AddActionReplyRequest
                | AddActionReplyAllRequest
                | AddActionAliasRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { action: string } } & {
              json:
                | AddActionCombineRequest
                | AddActionSmsRequest
                | AddActionWebhookRequest
                | AddActionDaemonRequest
                | AddActionSendRequest
                | AddActionForwardRequest
                | AddActionForwardRequest
                | AddActionReplyRequest
                | AddActionReplyAllRequest
                | AddActionAliasRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { action: string } } & {
              json:
                | AddActionCombineRequest
                | AddActionSmsRequest
                | AddActionWebhookRequest
                | AddActionDaemonRequest
                | AddActionSendRequest
                | AddActionForwardRequest
                | AddActionForwardRequest
                | AddActionReplyRequest
                | AddActionReplyAllRequest
                | AddActionAliasRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/addresses': {
      $get:
        | { input: {}; output: GetAllAddressesResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 405 }
      $post:
        | { input: { json: AddAddressRequest }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { json: AddAddressRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AddAddressRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AddAddressRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/addresses/:address': {
      $delete:
        | { input: { param: { address: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { address: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { address: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/addresses/:address/keys': {
      $get:
        | {
            input: { param: { address: string } }
            output: GetAllKeysResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { address: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { address: string } } & { json: AddKeyRequest }
            output: AddKeyResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { address: string } } & { json: AddKeyRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { address: string } } & { json: AddKeyRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/addresses/:address/keys/:key': {
      $delete:
        | {
            input: { param: { address: string; key: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { address: string; key: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string; key: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { address: string; key: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { address: string; key: string } }
            output: Key
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string; key: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { address: string; key: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { address: string; key: string } } & { json: UpdateKeyRequest }
            output: Key
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string; key: string } } & { json: UpdateKeyRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string; key: string } } & { json: UpdateKeyRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { address: string; key: string } } & { json: UpdateKeyRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/daemons/:daemon/token': {
      $get:
        | {
            input: { param: { daemon: string } }
            output: { token: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { daemon: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { daemon: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/domains': {
      $get:
        | { input: {}; output: GetAllDomainsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 405 }
      $post:
        | {
            input: { json: AddDomainRequest }
            output: DomainResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AddDomainRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AddDomainRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AddDomainRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/domains/verify/:domain': {
      $get:
        | {
            input: { param: { domain: string } }
            output: DomainResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domain: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { domain: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { domain: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 405
          }
      $post:
        | {
            input: { param: { domain: string } }
            output: CheckDomainVerify
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domain: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { domain: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { domain: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { domain: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/domains/:domain': {
      $delete:
        | { input: { param: { domain: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { domain: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { domain: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { domain: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/inputs': {
      $get:
        | {
            input: { query: { name?: string | undefined } }
            output: GetAllInputsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { name?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { name?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/integrations': {
      $get:
        | { input: {}; output: GetAllIntegrationsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/integrations/:integration': {
      $delete:
        | {
            input: { param: { integration: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { integration: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { integration: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { integration: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/send': {
      $post:
        | { input: { json: SendRequest }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: SendRequest }; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: { json: SendRequest }; output: ErrorResponse; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/triggers': {
      $get:
        | { input: {}; output: GetAllTriggersResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 403 }
      $post:
        | {
            input: { json: AddTriggerRequest }
            output: AddTriggerResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: AddTriggerRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AddTriggerRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/triggers/:trigger': {
      $delete:
        | { input: { param: { trigger: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { trigger: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { trigger: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { trigger: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { trigger: string } } & { json: AddTriggerRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { trigger: string } } & { json: AddTriggerRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { trigger: string } } & { json: AddTriggerRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { trigger: string } } & { json: AddTriggerRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/user': {
      $get:
        | { input: {}; output: User; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 403 }
      $put:
        | { input: { json: UpdateUserRequest }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { json: UpdateUserRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UpdateUserRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/verifications': {
      $get:
        | { input: {}; output: GetAllVerificationsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 403 }
      $post:
        | {
            input: { json: AddEmailVerificationRequest | AddSmsVerificationRequest }
            output: AddVerificationResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: AddEmailVerificationRequest | AddSmsVerificationRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AddEmailVerificationRequest | AddSmsVerificationRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/verifications/:verification/verify': {
      $post:
        | {
            input: { param: { verification: string } } & {
              json: VerifyEmailRequest | VerifySmsRequest
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { verification: string } } & {
              json: VerifyEmailRequest | VerifySmsRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { verification: string } } & {
              json: VerifyEmailRequest | VerifySmsRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { verification: string } } & {
              json: VerifyEmailRequest | VerifySmsRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/workflows': {
      $get:
        | { input: {}; output: GetAllWorkflowsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 405 }
      $post:
        | { input: { json: AddWorkflowRequest }; output: {}; outputFormat: string; status: 201 }
        | {
            input: { json: AddWorkflowRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AddWorkflowRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AddWorkflowRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/workflows/set': {
      $post:
        | { input: { json: SetWorkflowRequest }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: SetWorkflowRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SetWorkflowRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: SetWorkflowRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/workflows/:workflow': {
      $delete:
        | { input: { param: { workflow: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { workflow: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workflow: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workflow: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { workflow: string } } & { json: AddWorkflowRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { workflow: string } } & { json: AddWorkflowRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workflow: string } } & { json: AddWorkflowRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workflow: string } } & { json: AddWorkflowRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/workspaces': {
      $get:
        | { input: {}; output: GetAllWorkspacesResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 405 }
      $post:
        | { input: { json: AddWorkspaceRequest }; output: {}; outputFormat: string; status: 201 }
        | {
            input: { json: AddWorkspaceRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AddWorkspaceRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AddWorkspaceRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 405
          }
    }
  },
  '/'
>
export default routes
