import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersEmployeesEmploymentsDeclarationsDeclarationIdAttachmentRoute,
  getProvidersEmployersEmployerIdEmployeesEmploymentsDeclarationsWithattachmentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const declarationsAttachmentsHandler = app
  .openapi(
    getProvidersEmployersEmployeesEmploymentsDeclarationsDeclarationIdAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployerIdEmployeesEmploymentsDeclarationsWithattachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
