import { OpenAPIHono } from '@hono/zod-openapi'
import {
  contactHandler,
  countryHandler,
  deactivationReasonHandler,
  estimateHandler,
  exchangeRateHandler,
  fileHandler,
  invoiceHandler,
  myInfoHandler,
  orderHandler,
  projectCategoryHandler,
  projectHandler,
  projectStatusHandler,
  quoteHandler,
  rfeHandler,
  rfqHandler,
  shipmentHandler,
  specHandler,
  specTemplateHandler,
  taskHandler,
  teamMemberHandler,
  teamMemberRoleHandler,
  timeCardHandler,
  userFieldsHandler,
  workgroupHandler,
  workgroupMembersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', fileHandler)
  .route('/', specHandler)
  .route('/', teamMemberHandler)
  .route('/', countryHandler)
  .route('/', workgroupHandler)
  .route('/', myInfoHandler)
  .route('/', contactHandler)
  .route('/', orderHandler)
  .route('/', projectCategoryHandler)
  .route('/', userFieldsHandler)
  .route('/', projectStatusHandler)
  .route('/', taskHandler)
  .route('/', deactivationReasonHandler)
  .route('/', exchangeRateHandler)
  .route('/', timeCardHandler)
  .route('/', projectHandler)
  .route('/', estimateHandler)
  .route('/', invoiceHandler)
  .route('/', teamMemberRoleHandler)
  .route('/', quoteHandler)
  .route('/', rfeHandler)
  .route('/', rfqHandler)
  .route('/', shipmentHandler)
  .route('/', specTemplateHandler)
  .route('/', workgroupMembersHandler)

export default app
