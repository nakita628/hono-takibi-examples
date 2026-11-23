type FromNumber = string
type ToNumber = string
type TemplateParameters = string[]
type FromId = string
type ToId = string
type MessageUuid = string
type ErrorUnauthorizedMissingCredentials = {
  detail?: string | undefined
  instance: string
  title: string
  type: string
}
type ErrorUnauthorizedInvalidApplication = {
  detail?: string | undefined
  instance: string
  title: string
  type: string
}
type ErrorPaymentRequired = { detail: string; instance: string; title: string; type: string }
type ErrorInvalidJson = { detail: string; instance: string; title: string; type: string }
type ErrorChannel = { detail: string; instance: string; title: string; type: string }
type ErrorChannelParams = {
  detail: string
  instance: string
  invalid_parameters?: { name?: string | undefined; reason?: string | undefined }[] | undefined
  title: string
  type: string
}
type ErrorSender = { detail: string; instance: string; title: string; type: string }
type ErrorRecipient = { detail: string; instance: string; title: string; type: string }
type ErrorMessageType = { detail: string; instance: string; title: string; type: string }
type ErrorMessageParams = {
  detail: string
  instance: string
  invalid_parameters?: { name?: string | undefined; reason?: string | undefined }[] | undefined
  title: string
  type: string
}
type ErrorClientReference = { detail: string; instance: string; title: string; type: string }
type ErrorThrottled = { detail: string; instance: string; title: string; type: string }
type ErrorInternal = { detail: string; instance: string; title: string; type: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $post:
        | {
            input: {
              json:
                | {
                    client_ref?: string | undefined
                    message_type?: 'text' | undefined
                    text: { [x: string]: unknown }
                    channel?: 'sms' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    image: { caption?: string | undefined; url: string }
                    message_type?: 'image' | undefined
                    channel?: 'mms' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'vcard' | undefined
                    vcard: { url: string }
                    channel?: 'mms' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    audio: { caption?: string | undefined; url: string }
                    message_type?: 'audio' | undefined
                    channel?: 'mms' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'video' | undefined
                    video: { caption?: string | undefined; url: string }
                    channel?: 'mms' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'text' | undefined
                    text: { [x: string]: unknown }
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    location: {
                      address?: string | undefined
                      lat: number
                      long: number
                      name?: string | undefined
                    }
                    message_type?: 'location' | undefined
                    text?: { [x: string]: unknown } | undefined
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    image: { caption?: string | undefined; url: string }
                    message_type?: 'image' | undefined
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    audio: { url: { [x: string]: unknown } }
                    message_type?: 'audio' | undefined
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'video' | undefined
                    video: { caption?: string | undefined; url: { [x: string]: unknown } }
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    file: { caption?: string | undefined; url: { [x: string]: unknown } }
                    message_type?: 'file' | undefined
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'template' | undefined
                    template: { name: string; parameters?: TemplateParameters | undefined }
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                    whatsapp?: { locale: string; policy?: 'deterministic' | undefined } | undefined
                  }
                | {
                    client_ref?: string | undefined
                    custom?: { [x: string]: unknown } | undefined
                    message_type?: 'custom' | undefined
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'text' | undefined
                    text: { [x: string]: unknown }
                    channel?: 'messenger' | undefined
                    from?: FromId | undefined
                    messenger?:
                      | {
                          category?: 'response' | 'update' | 'message_tag' | undefined
                          tag?: string | undefined
                        }
                      | undefined
                    to?: ToId | undefined
                  }
                | {
                    client_ref?: string | undefined
                    image: { url?: string | undefined }
                    message_type?: 'image' | undefined
                    channel?: 'messenger' | undefined
                    from?: FromId | undefined
                    messenger?:
                      | {
                          category?: 'response' | 'update' | 'message_tag' | undefined
                          tag?: string | undefined
                        }
                      | undefined
                    to?: ToId | undefined
                  }
                | {
                    client_ref?: string | undefined
                    audio: { url?: { [x: string]: unknown } | undefined }
                    message_type?: 'audio' | undefined
                    channel?: 'messenger' | undefined
                    from?: FromId | undefined
                    messenger?:
                      | {
                          category?: 'response' | 'update' | 'message_tag' | undefined
                          tag?: string | undefined
                        }
                      | undefined
                    to?: ToId | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'video' | undefined
                    video: { url?: { [x: string]: unknown } | undefined }
                    channel?: 'messenger' | undefined
                    from?: FromId | undefined
                    messenger?:
                      | {
                          category?: 'response' | 'update' | 'message_tag' | undefined
                          tag?: string | undefined
                        }
                      | undefined
                    to?: ToId | undefined
                  }
                | {
                    client_ref?: string | undefined
                    file: { url?: { [x: string]: unknown } | undefined }
                    message_type?: 'file' | undefined
                    channel?: 'messenger' | undefined
                    from?: FromId | undefined
                    messenger?:
                      | {
                          category?: 'response' | 'update' | 'message_tag' | undefined
                          tag?: string | undefined
                        }
                      | undefined
                    to?: ToId | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'text' | undefined
                    text: { [x: string]: unknown }
                    channel?: 'viber_service' | undefined
                    from?: FromId | undefined
                    to?: ToNumber | undefined
                    viber_service?:
                      | {
                          action?:
                            | { text?: string | undefined; url?: string | undefined }
                            | undefined
                          category?: 'transaction' | 'promotion' | undefined
                          ttl?: number | undefined
                          type?: string | undefined
                        }
                      | undefined
                  }
                | {
                    client_ref?: string | undefined
                    image: { caption?: string | undefined; url?: string | undefined }
                    message_type?: 'image' | undefined
                    channel?: 'viber_service' | undefined
                    from?: FromId | undefined
                    to?: ToNumber | undefined
                    viber_service?:
                      | {
                          action?:
                            | { text?: string | undefined; url?: string | undefined }
                            | undefined
                          category?: 'transaction' | 'promotion' | undefined
                          ttl?: number | undefined
                          type?: string | undefined
                        }
                      | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'video' | undefined
                    video: { caption?: string | undefined; thumb_url: string; url: string }
                    channel?: 'viber_service' | undefined
                    from?: FromId | undefined
                    to?: ToNumber | undefined
                    viber_service?:
                      | {
                          category?: 'transaction' | 'promotion' | undefined
                          duration?: string | undefined
                          file_size?: string | undefined
                          ttl?: number | undefined
                          type?: string | undefined
                        }
                      | undefined
                  }
                | {
                    client_ref?: string | undefined
                    file: { name?: string | undefined; url?: string | undefined }
                    message_type?: 'file' | undefined
                    channel?: 'viber_service' | undefined
                    from?: FromId | undefined
                    to?: ToNumber | undefined
                    viber_service?:
                      | {
                          category?: 'transaction' | 'promotion' | undefined
                          ttl?: number | undefined
                          type?: string | undefined
                        }
                      | undefined
                  }
            }
            output:
              | { message_uuid?: MessageUuid | undefined }
              | { message_uuid?: MessageUuid | undefined }
              | { message_uuid?: MessageUuid | undefined }
              | { message_uuid?: MessageUuid | undefined }
              | { message_uuid?: MessageUuid | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              json:
                | {
                    client_ref?: string | undefined
                    message_type?: 'text' | undefined
                    text: { [x: string]: unknown }
                    channel?: 'sms' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    image: { caption?: string | undefined; url: string }
                    message_type?: 'image' | undefined
                    channel?: 'mms' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'vcard' | undefined
                    vcard: { url: string }
                    channel?: 'mms' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    audio: { caption?: string | undefined; url: string }
                    message_type?: 'audio' | undefined
                    channel?: 'mms' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'video' | undefined
                    video: { caption?: string | undefined; url: string }
                    channel?: 'mms' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'text' | undefined
                    text: { [x: string]: unknown }
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    location: {
                      address?: string | undefined
                      lat: number
                      long: number
                      name?: string | undefined
                    }
                    message_type?: 'location' | undefined
                    text?: { [x: string]: unknown } | undefined
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    image: { caption?: string | undefined; url: string }
                    message_type?: 'image' | undefined
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    audio: { url: { [x: string]: unknown } }
                    message_type?: 'audio' | undefined
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'video' | undefined
                    video: { caption?: string | undefined; url: { [x: string]: unknown } }
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    file: { caption?: string | undefined; url: { [x: string]: unknown } }
                    message_type?: 'file' | undefined
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'template' | undefined
                    template: { name: string; parameters?: TemplateParameters | undefined }
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                    whatsapp?: { locale: string; policy?: 'deterministic' | undefined } | undefined
                  }
                | {
                    client_ref?: string | undefined
                    custom?: { [x: string]: unknown } | undefined
                    message_type?: 'custom' | undefined
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'text' | undefined
                    text: { [x: string]: unknown }
                    channel?: 'messenger' | undefined
                    from?: FromId | undefined
                    messenger?:
                      | {
                          category?: 'response' | 'update' | 'message_tag' | undefined
                          tag?: string | undefined
                        }
                      | undefined
                    to?: ToId | undefined
                  }
                | {
                    client_ref?: string | undefined
                    image: { url?: string | undefined }
                    message_type?: 'image' | undefined
                    channel?: 'messenger' | undefined
                    from?: FromId | undefined
                    messenger?:
                      | {
                          category?: 'response' | 'update' | 'message_tag' | undefined
                          tag?: string | undefined
                        }
                      | undefined
                    to?: ToId | undefined
                  }
                | {
                    client_ref?: string | undefined
                    audio: { url?: { [x: string]: unknown } | undefined }
                    message_type?: 'audio' | undefined
                    channel?: 'messenger' | undefined
                    from?: FromId | undefined
                    messenger?:
                      | {
                          category?: 'response' | 'update' | 'message_tag' | undefined
                          tag?: string | undefined
                        }
                      | undefined
                    to?: ToId | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'video' | undefined
                    video: { url?: { [x: string]: unknown } | undefined }
                    channel?: 'messenger' | undefined
                    from?: FromId | undefined
                    messenger?:
                      | {
                          category?: 'response' | 'update' | 'message_tag' | undefined
                          tag?: string | undefined
                        }
                      | undefined
                    to?: ToId | undefined
                  }
                | {
                    client_ref?: string | undefined
                    file: { url?: { [x: string]: unknown } | undefined }
                    message_type?: 'file' | undefined
                    channel?: 'messenger' | undefined
                    from?: FromId | undefined
                    messenger?:
                      | {
                          category?: 'response' | 'update' | 'message_tag' | undefined
                          tag?: string | undefined
                        }
                      | undefined
                    to?: ToId | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'text' | undefined
                    text: { [x: string]: unknown }
                    channel?: 'viber_service' | undefined
                    from?: FromId | undefined
                    to?: ToNumber | undefined
                    viber_service?:
                      | {
                          action?:
                            | { text?: string | undefined; url?: string | undefined }
                            | undefined
                          category?: 'transaction' | 'promotion' | undefined
                          ttl?: number | undefined
                          type?: string | undefined
                        }
                      | undefined
                  }
                | {
                    client_ref?: string | undefined
                    image: { caption?: string | undefined; url?: string | undefined }
                    message_type?: 'image' | undefined
                    channel?: 'viber_service' | undefined
                    from?: FromId | undefined
                    to?: ToNumber | undefined
                    viber_service?:
                      | {
                          action?:
                            | { text?: string | undefined; url?: string | undefined }
                            | undefined
                          category?: 'transaction' | 'promotion' | undefined
                          ttl?: number | undefined
                          type?: string | undefined
                        }
                      | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'video' | undefined
                    video: { caption?: string | undefined; thumb_url: string; url: string }
                    channel?: 'viber_service' | undefined
                    from?: FromId | undefined
                    to?: ToNumber | undefined
                    viber_service?:
                      | {
                          category?: 'transaction' | 'promotion' | undefined
                          duration?: string | undefined
                          file_size?: string | undefined
                          ttl?: number | undefined
                          type?: string | undefined
                        }
                      | undefined
                  }
                | {
                    client_ref?: string | undefined
                    file: { name?: string | undefined; url?: string | undefined }
                    message_type?: 'file' | undefined
                    channel?: 'viber_service' | undefined
                    from?: FromId | undefined
                    to?: ToNumber | undefined
                    viber_service?:
                      | {
                          category?: 'transaction' | 'promotion' | undefined
                          ttl?: number | undefined
                          type?: string | undefined
                        }
                      | undefined
                  }
            }
            output: ErrorUnauthorizedMissingCredentials | ErrorUnauthorizedInvalidApplication
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json:
                | {
                    client_ref?: string | undefined
                    message_type?: 'text' | undefined
                    text: { [x: string]: unknown }
                    channel?: 'sms' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    image: { caption?: string | undefined; url: string }
                    message_type?: 'image' | undefined
                    channel?: 'mms' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'vcard' | undefined
                    vcard: { url: string }
                    channel?: 'mms' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    audio: { caption?: string | undefined; url: string }
                    message_type?: 'audio' | undefined
                    channel?: 'mms' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'video' | undefined
                    video: { caption?: string | undefined; url: string }
                    channel?: 'mms' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'text' | undefined
                    text: { [x: string]: unknown }
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    location: {
                      address?: string | undefined
                      lat: number
                      long: number
                      name?: string | undefined
                    }
                    message_type?: 'location' | undefined
                    text?: { [x: string]: unknown } | undefined
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    image: { caption?: string | undefined; url: string }
                    message_type?: 'image' | undefined
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    audio: { url: { [x: string]: unknown } }
                    message_type?: 'audio' | undefined
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'video' | undefined
                    video: { caption?: string | undefined; url: { [x: string]: unknown } }
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    file: { caption?: string | undefined; url: { [x: string]: unknown } }
                    message_type?: 'file' | undefined
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'template' | undefined
                    template: { name: string; parameters?: TemplateParameters | undefined }
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                    whatsapp?: { locale: string; policy?: 'deterministic' | undefined } | undefined
                  }
                | {
                    client_ref?: string | undefined
                    custom?: { [x: string]: unknown } | undefined
                    message_type?: 'custom' | undefined
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'text' | undefined
                    text: { [x: string]: unknown }
                    channel?: 'messenger' | undefined
                    from?: FromId | undefined
                    messenger?:
                      | {
                          category?: 'response' | 'update' | 'message_tag' | undefined
                          tag?: string | undefined
                        }
                      | undefined
                    to?: ToId | undefined
                  }
                | {
                    client_ref?: string | undefined
                    image: { url?: string | undefined }
                    message_type?: 'image' | undefined
                    channel?: 'messenger' | undefined
                    from?: FromId | undefined
                    messenger?:
                      | {
                          category?: 'response' | 'update' | 'message_tag' | undefined
                          tag?: string | undefined
                        }
                      | undefined
                    to?: ToId | undefined
                  }
                | {
                    client_ref?: string | undefined
                    audio: { url?: { [x: string]: unknown } | undefined }
                    message_type?: 'audio' | undefined
                    channel?: 'messenger' | undefined
                    from?: FromId | undefined
                    messenger?:
                      | {
                          category?: 'response' | 'update' | 'message_tag' | undefined
                          tag?: string | undefined
                        }
                      | undefined
                    to?: ToId | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'video' | undefined
                    video: { url?: { [x: string]: unknown } | undefined }
                    channel?: 'messenger' | undefined
                    from?: FromId | undefined
                    messenger?:
                      | {
                          category?: 'response' | 'update' | 'message_tag' | undefined
                          tag?: string | undefined
                        }
                      | undefined
                    to?: ToId | undefined
                  }
                | {
                    client_ref?: string | undefined
                    file: { url?: { [x: string]: unknown } | undefined }
                    message_type?: 'file' | undefined
                    channel?: 'messenger' | undefined
                    from?: FromId | undefined
                    messenger?:
                      | {
                          category?: 'response' | 'update' | 'message_tag' | undefined
                          tag?: string | undefined
                        }
                      | undefined
                    to?: ToId | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'text' | undefined
                    text: { [x: string]: unknown }
                    channel?: 'viber_service' | undefined
                    from?: FromId | undefined
                    to?: ToNumber | undefined
                    viber_service?:
                      | {
                          action?:
                            | { text?: string | undefined; url?: string | undefined }
                            | undefined
                          category?: 'transaction' | 'promotion' | undefined
                          ttl?: number | undefined
                          type?: string | undefined
                        }
                      | undefined
                  }
                | {
                    client_ref?: string | undefined
                    image: { caption?: string | undefined; url?: string | undefined }
                    message_type?: 'image' | undefined
                    channel?: 'viber_service' | undefined
                    from?: FromId | undefined
                    to?: ToNumber | undefined
                    viber_service?:
                      | {
                          action?:
                            | { text?: string | undefined; url?: string | undefined }
                            | undefined
                          category?: 'transaction' | 'promotion' | undefined
                          ttl?: number | undefined
                          type?: string | undefined
                        }
                      | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'video' | undefined
                    video: { caption?: string | undefined; thumb_url: string; url: string }
                    channel?: 'viber_service' | undefined
                    from?: FromId | undefined
                    to?: ToNumber | undefined
                    viber_service?:
                      | {
                          category?: 'transaction' | 'promotion' | undefined
                          duration?: string | undefined
                          file_size?: string | undefined
                          ttl?: number | undefined
                          type?: string | undefined
                        }
                      | undefined
                  }
                | {
                    client_ref?: string | undefined
                    file: { name?: string | undefined; url?: string | undefined }
                    message_type?: 'file' | undefined
                    channel?: 'viber_service' | undefined
                    from?: FromId | undefined
                    to?: ToNumber | undefined
                    viber_service?:
                      | {
                          category?: 'transaction' | 'promotion' | undefined
                          ttl?: number | undefined
                          type?: string | undefined
                        }
                      | undefined
                  }
            }
            output: ErrorPaymentRequired
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              json:
                | {
                    client_ref?: string | undefined
                    message_type?: 'text' | undefined
                    text: { [x: string]: unknown }
                    channel?: 'sms' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    image: { caption?: string | undefined; url: string }
                    message_type?: 'image' | undefined
                    channel?: 'mms' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'vcard' | undefined
                    vcard: { url: string }
                    channel?: 'mms' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    audio: { caption?: string | undefined; url: string }
                    message_type?: 'audio' | undefined
                    channel?: 'mms' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'video' | undefined
                    video: { caption?: string | undefined; url: string }
                    channel?: 'mms' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'text' | undefined
                    text: { [x: string]: unknown }
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    location: {
                      address?: string | undefined
                      lat: number
                      long: number
                      name?: string | undefined
                    }
                    message_type?: 'location' | undefined
                    text?: { [x: string]: unknown } | undefined
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    image: { caption?: string | undefined; url: string }
                    message_type?: 'image' | undefined
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    audio: { url: { [x: string]: unknown } }
                    message_type?: 'audio' | undefined
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'video' | undefined
                    video: { caption?: string | undefined; url: { [x: string]: unknown } }
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    file: { caption?: string | undefined; url: { [x: string]: unknown } }
                    message_type?: 'file' | undefined
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'template' | undefined
                    template: { name: string; parameters?: TemplateParameters | undefined }
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                    whatsapp?: { locale: string; policy?: 'deterministic' | undefined } | undefined
                  }
                | {
                    client_ref?: string | undefined
                    custom?: { [x: string]: unknown } | undefined
                    message_type?: 'custom' | undefined
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'text' | undefined
                    text: { [x: string]: unknown }
                    channel?: 'messenger' | undefined
                    from?: FromId | undefined
                    messenger?:
                      | {
                          category?: 'response' | 'update' | 'message_tag' | undefined
                          tag?: string | undefined
                        }
                      | undefined
                    to?: ToId | undefined
                  }
                | {
                    client_ref?: string | undefined
                    image: { url?: string | undefined }
                    message_type?: 'image' | undefined
                    channel?: 'messenger' | undefined
                    from?: FromId | undefined
                    messenger?:
                      | {
                          category?: 'response' | 'update' | 'message_tag' | undefined
                          tag?: string | undefined
                        }
                      | undefined
                    to?: ToId | undefined
                  }
                | {
                    client_ref?: string | undefined
                    audio: { url?: { [x: string]: unknown } | undefined }
                    message_type?: 'audio' | undefined
                    channel?: 'messenger' | undefined
                    from?: FromId | undefined
                    messenger?:
                      | {
                          category?: 'response' | 'update' | 'message_tag' | undefined
                          tag?: string | undefined
                        }
                      | undefined
                    to?: ToId | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'video' | undefined
                    video: { url?: { [x: string]: unknown } | undefined }
                    channel?: 'messenger' | undefined
                    from?: FromId | undefined
                    messenger?:
                      | {
                          category?: 'response' | 'update' | 'message_tag' | undefined
                          tag?: string | undefined
                        }
                      | undefined
                    to?: ToId | undefined
                  }
                | {
                    client_ref?: string | undefined
                    file: { url?: { [x: string]: unknown } | undefined }
                    message_type?: 'file' | undefined
                    channel?: 'messenger' | undefined
                    from?: FromId | undefined
                    messenger?:
                      | {
                          category?: 'response' | 'update' | 'message_tag' | undefined
                          tag?: string | undefined
                        }
                      | undefined
                    to?: ToId | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'text' | undefined
                    text: { [x: string]: unknown }
                    channel?: 'viber_service' | undefined
                    from?: FromId | undefined
                    to?: ToNumber | undefined
                    viber_service?:
                      | {
                          action?:
                            | { text?: string | undefined; url?: string | undefined }
                            | undefined
                          category?: 'transaction' | 'promotion' | undefined
                          ttl?: number | undefined
                          type?: string | undefined
                        }
                      | undefined
                  }
                | {
                    client_ref?: string | undefined
                    image: { caption?: string | undefined; url?: string | undefined }
                    message_type?: 'image' | undefined
                    channel?: 'viber_service' | undefined
                    from?: FromId | undefined
                    to?: ToNumber | undefined
                    viber_service?:
                      | {
                          action?:
                            | { text?: string | undefined; url?: string | undefined }
                            | undefined
                          category?: 'transaction' | 'promotion' | undefined
                          ttl?: number | undefined
                          type?: string | undefined
                        }
                      | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'video' | undefined
                    video: { caption?: string | undefined; thumb_url: string; url: string }
                    channel?: 'viber_service' | undefined
                    from?: FromId | undefined
                    to?: ToNumber | undefined
                    viber_service?:
                      | {
                          category?: 'transaction' | 'promotion' | undefined
                          duration?: string | undefined
                          file_size?: string | undefined
                          ttl?: number | undefined
                          type?: string | undefined
                        }
                      | undefined
                  }
                | {
                    client_ref?: string | undefined
                    file: { name?: string | undefined; url?: string | undefined }
                    message_type?: 'file' | undefined
                    channel?: 'viber_service' | undefined
                    from?: FromId | undefined
                    to?: ToNumber | undefined
                    viber_service?:
                      | {
                          category?: 'transaction' | 'promotion' | undefined
                          ttl?: number | undefined
                          type?: string | undefined
                        }
                      | undefined
                  }
            }
            output:
              | ErrorInvalidJson
              | ErrorChannel
              | ErrorChannelParams
              | ErrorSender
              | ErrorRecipient
              | ErrorMessageType
              | ErrorMessageParams
              | ErrorClientReference
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json:
                | {
                    client_ref?: string | undefined
                    message_type?: 'text' | undefined
                    text: { [x: string]: unknown }
                    channel?: 'sms' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    image: { caption?: string | undefined; url: string }
                    message_type?: 'image' | undefined
                    channel?: 'mms' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'vcard' | undefined
                    vcard: { url: string }
                    channel?: 'mms' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    audio: { caption?: string | undefined; url: string }
                    message_type?: 'audio' | undefined
                    channel?: 'mms' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'video' | undefined
                    video: { caption?: string | undefined; url: string }
                    channel?: 'mms' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'text' | undefined
                    text: { [x: string]: unknown }
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    location: {
                      address?: string | undefined
                      lat: number
                      long: number
                      name?: string | undefined
                    }
                    message_type?: 'location' | undefined
                    text?: { [x: string]: unknown } | undefined
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    image: { caption?: string | undefined; url: string }
                    message_type?: 'image' | undefined
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    audio: { url: { [x: string]: unknown } }
                    message_type?: 'audio' | undefined
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'video' | undefined
                    video: { caption?: string | undefined; url: { [x: string]: unknown } }
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    file: { caption?: string | undefined; url: { [x: string]: unknown } }
                    message_type?: 'file' | undefined
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'template' | undefined
                    template: { name: string; parameters?: TemplateParameters | undefined }
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                    whatsapp?: { locale: string; policy?: 'deterministic' | undefined } | undefined
                  }
                | {
                    client_ref?: string | undefined
                    custom?: { [x: string]: unknown } | undefined
                    message_type?: 'custom' | undefined
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'text' | undefined
                    text: { [x: string]: unknown }
                    channel?: 'messenger' | undefined
                    from?: FromId | undefined
                    messenger?:
                      | {
                          category?: 'response' | 'update' | 'message_tag' | undefined
                          tag?: string | undefined
                        }
                      | undefined
                    to?: ToId | undefined
                  }
                | {
                    client_ref?: string | undefined
                    image: { url?: string | undefined }
                    message_type?: 'image' | undefined
                    channel?: 'messenger' | undefined
                    from?: FromId | undefined
                    messenger?:
                      | {
                          category?: 'response' | 'update' | 'message_tag' | undefined
                          tag?: string | undefined
                        }
                      | undefined
                    to?: ToId | undefined
                  }
                | {
                    client_ref?: string | undefined
                    audio: { url?: { [x: string]: unknown } | undefined }
                    message_type?: 'audio' | undefined
                    channel?: 'messenger' | undefined
                    from?: FromId | undefined
                    messenger?:
                      | {
                          category?: 'response' | 'update' | 'message_tag' | undefined
                          tag?: string | undefined
                        }
                      | undefined
                    to?: ToId | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'video' | undefined
                    video: { url?: { [x: string]: unknown } | undefined }
                    channel?: 'messenger' | undefined
                    from?: FromId | undefined
                    messenger?:
                      | {
                          category?: 'response' | 'update' | 'message_tag' | undefined
                          tag?: string | undefined
                        }
                      | undefined
                    to?: ToId | undefined
                  }
                | {
                    client_ref?: string | undefined
                    file: { url?: { [x: string]: unknown } | undefined }
                    message_type?: 'file' | undefined
                    channel?: 'messenger' | undefined
                    from?: FromId | undefined
                    messenger?:
                      | {
                          category?: 'response' | 'update' | 'message_tag' | undefined
                          tag?: string | undefined
                        }
                      | undefined
                    to?: ToId | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'text' | undefined
                    text: { [x: string]: unknown }
                    channel?: 'viber_service' | undefined
                    from?: FromId | undefined
                    to?: ToNumber | undefined
                    viber_service?:
                      | {
                          action?:
                            | { text?: string | undefined; url?: string | undefined }
                            | undefined
                          category?: 'transaction' | 'promotion' | undefined
                          ttl?: number | undefined
                          type?: string | undefined
                        }
                      | undefined
                  }
                | {
                    client_ref?: string | undefined
                    image: { caption?: string | undefined; url?: string | undefined }
                    message_type?: 'image' | undefined
                    channel?: 'viber_service' | undefined
                    from?: FromId | undefined
                    to?: ToNumber | undefined
                    viber_service?:
                      | {
                          action?:
                            | { text?: string | undefined; url?: string | undefined }
                            | undefined
                          category?: 'transaction' | 'promotion' | undefined
                          ttl?: number | undefined
                          type?: string | undefined
                        }
                      | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'video' | undefined
                    video: { caption?: string | undefined; thumb_url: string; url: string }
                    channel?: 'viber_service' | undefined
                    from?: FromId | undefined
                    to?: ToNumber | undefined
                    viber_service?:
                      | {
                          category?: 'transaction' | 'promotion' | undefined
                          duration?: string | undefined
                          file_size?: string | undefined
                          ttl?: number | undefined
                          type?: string | undefined
                        }
                      | undefined
                  }
                | {
                    client_ref?: string | undefined
                    file: { name?: string | undefined; url?: string | undefined }
                    message_type?: 'file' | undefined
                    channel?: 'viber_service' | undefined
                    from?: FromId | undefined
                    to?: ToNumber | undefined
                    viber_service?:
                      | {
                          category?: 'transaction' | 'promotion' | undefined
                          ttl?: number | undefined
                          type?: string | undefined
                        }
                      | undefined
                  }
            }
            output: ErrorThrottled
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json:
                | {
                    client_ref?: string | undefined
                    message_type?: 'text' | undefined
                    text: { [x: string]: unknown }
                    channel?: 'sms' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    image: { caption?: string | undefined; url: string }
                    message_type?: 'image' | undefined
                    channel?: 'mms' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'vcard' | undefined
                    vcard: { url: string }
                    channel?: 'mms' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    audio: { caption?: string | undefined; url: string }
                    message_type?: 'audio' | undefined
                    channel?: 'mms' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'video' | undefined
                    video: { caption?: string | undefined; url: string }
                    channel?: 'mms' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'text' | undefined
                    text: { [x: string]: unknown }
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    location: {
                      address?: string | undefined
                      lat: number
                      long: number
                      name?: string | undefined
                    }
                    message_type?: 'location' | undefined
                    text?: { [x: string]: unknown } | undefined
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    image: { caption?: string | undefined; url: string }
                    message_type?: 'image' | undefined
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    audio: { url: { [x: string]: unknown } }
                    message_type?: 'audio' | undefined
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'video' | undefined
                    video: { caption?: string | undefined; url: { [x: string]: unknown } }
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    file: { caption?: string | undefined; url: { [x: string]: unknown } }
                    message_type?: 'file' | undefined
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'template' | undefined
                    template: { name: string; parameters?: TemplateParameters | undefined }
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                    whatsapp?: { locale: string; policy?: 'deterministic' | undefined } | undefined
                  }
                | {
                    client_ref?: string | undefined
                    custom?: { [x: string]: unknown } | undefined
                    message_type?: 'custom' | undefined
                    channel?: 'whatsapp' | undefined
                    from?: FromNumber | undefined
                    to?: ToNumber | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'text' | undefined
                    text: { [x: string]: unknown }
                    channel?: 'messenger' | undefined
                    from?: FromId | undefined
                    messenger?:
                      | {
                          category?: 'response' | 'update' | 'message_tag' | undefined
                          tag?: string | undefined
                        }
                      | undefined
                    to?: ToId | undefined
                  }
                | {
                    client_ref?: string | undefined
                    image: { url?: string | undefined }
                    message_type?: 'image' | undefined
                    channel?: 'messenger' | undefined
                    from?: FromId | undefined
                    messenger?:
                      | {
                          category?: 'response' | 'update' | 'message_tag' | undefined
                          tag?: string | undefined
                        }
                      | undefined
                    to?: ToId | undefined
                  }
                | {
                    client_ref?: string | undefined
                    audio: { url?: { [x: string]: unknown } | undefined }
                    message_type?: 'audio' | undefined
                    channel?: 'messenger' | undefined
                    from?: FromId | undefined
                    messenger?:
                      | {
                          category?: 'response' | 'update' | 'message_tag' | undefined
                          tag?: string | undefined
                        }
                      | undefined
                    to?: ToId | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'video' | undefined
                    video: { url?: { [x: string]: unknown } | undefined }
                    channel?: 'messenger' | undefined
                    from?: FromId | undefined
                    messenger?:
                      | {
                          category?: 'response' | 'update' | 'message_tag' | undefined
                          tag?: string | undefined
                        }
                      | undefined
                    to?: ToId | undefined
                  }
                | {
                    client_ref?: string | undefined
                    file: { url?: { [x: string]: unknown } | undefined }
                    message_type?: 'file' | undefined
                    channel?: 'messenger' | undefined
                    from?: FromId | undefined
                    messenger?:
                      | {
                          category?: 'response' | 'update' | 'message_tag' | undefined
                          tag?: string | undefined
                        }
                      | undefined
                    to?: ToId | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'text' | undefined
                    text: { [x: string]: unknown }
                    channel?: 'viber_service' | undefined
                    from?: FromId | undefined
                    to?: ToNumber | undefined
                    viber_service?:
                      | {
                          action?:
                            | { text?: string | undefined; url?: string | undefined }
                            | undefined
                          category?: 'transaction' | 'promotion' | undefined
                          ttl?: number | undefined
                          type?: string | undefined
                        }
                      | undefined
                  }
                | {
                    client_ref?: string | undefined
                    image: { caption?: string | undefined; url?: string | undefined }
                    message_type?: 'image' | undefined
                    channel?: 'viber_service' | undefined
                    from?: FromId | undefined
                    to?: ToNumber | undefined
                    viber_service?:
                      | {
                          action?:
                            | { text?: string | undefined; url?: string | undefined }
                            | undefined
                          category?: 'transaction' | 'promotion' | undefined
                          ttl?: number | undefined
                          type?: string | undefined
                        }
                      | undefined
                  }
                | {
                    client_ref?: string | undefined
                    message_type?: 'video' | undefined
                    video: { caption?: string | undefined; thumb_url: string; url: string }
                    channel?: 'viber_service' | undefined
                    from?: FromId | undefined
                    to?: ToNumber | undefined
                    viber_service?:
                      | {
                          category?: 'transaction' | 'promotion' | undefined
                          duration?: string | undefined
                          file_size?: string | undefined
                          ttl?: number | undefined
                          type?: string | undefined
                        }
                      | undefined
                  }
                | {
                    client_ref?: string | undefined
                    file: { name?: string | undefined; url?: string | undefined }
                    message_type?: 'file' | undefined
                    channel?: 'viber_service' | undefined
                    from?: FromId | undefined
                    to?: ToNumber | undefined
                    viber_service?:
                      | {
                          category?: 'transaction' | 'promotion' | undefined
                          ttl?: number | undefined
                          type?: string | undefined
                        }
                      | undefined
                  }
            }
            output: ErrorInternal
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
