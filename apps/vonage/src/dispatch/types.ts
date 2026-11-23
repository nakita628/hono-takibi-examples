type FailoverProperty = {
  condition_status?: 'delivered' | 'read' | undefined
  expiry_time?: number | undefined
}
type FromProperty = {
  id?: string | undefined
  number?: string | undefined
  type: 'sms' | 'viber_service_msg' | 'messenger' | 'whatsapp'
}
type AudioProperty = { url?: string | undefined }
type FileProperty = { caption?: string | undefined; url?: string | undefined }
type ImageProperty = { caption?: string | undefined; url?: string | undefined }
type TemplateProperty = {
  name?: string | undefined
  parameters?: { default?: string | undefined }[] | undefined
}
type VideoProperty = { url?: string | undefined }
type MessageProperty = {
  content: {
    audio?: AudioProperty | undefined
    file?: FileProperty | undefined
    image?: ImageProperty | undefined
    template?: TemplateProperty | undefined
    text?: string | undefined
    type: 'text' | 'image' | 'audio' | 'video' | 'file' | 'template' | 'custom'
    video?: VideoProperty | undefined
  }
  messenger?:
    | { category?: 'response' | 'update' | 'message_tag' | undefined; tag?: string | undefined }
    | undefined
  viber_service_msg?:
    | { category?: 'transaction' | 'promotion' | undefined; ttl?: number | undefined }
    | undefined
  whatsapp?:
    | { locale?: string | undefined; policy?: 'fallback' | 'deterministic' | undefined }
    | undefined
}
type ToProperty = {
  id?: string | undefined
  number?: string | undefined
  type: 'sms' | 'viber_service_msg' | 'messenger' | 'whatsapp'
}
type SendWithFailoverMessage = {
  failover?: FailoverProperty | undefined
  from: FromProperty
  message: MessageProperty
  to: ToProperty
}
type SendMessage = { from: FromProperty; message: MessageProperty; to: ToProperty }
type CreateWorkflow = {
  template?: 'failover' | undefined
  workflow?: (SendWithFailoverMessage | SendMessage)[] | undefined
}
type Response = { dispatch_uuid: string }
type Error = {
  detail: string
  instance: string
  invalid_parameters?: { name?: string | undefined; reason?: string | undefined } | undefined
  type: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $post:
        | { input: { json: CreateWorkflow }; output: Response; outputFormat: 'json'; status: 202 }
        | { input: { json: CreateWorkflow }; output: Error; outputFormat: 'json'; status: 400 }
    }
  },
  '/'
>
export default routes
