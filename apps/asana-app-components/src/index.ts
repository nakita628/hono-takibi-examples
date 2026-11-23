import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionMetadataUrlPathPlaceholderHandler,
  actionOnChangeCallbackPathPlaceholderHandler,
  actionOnSubmitCallbackPathPlaceholderHandler,
  formMetadataUrlPathPlaceholderHandler,
  modalFormTypeaheadUrlPathPlaceholderHandler,
  onChangeCallbackPathPlaceholderHandler,
  onSubmitCallbackPathPlaceholderHandler,
  resourceAttachUrlPathPlaceholderHandler,
  resourceTypeaheadUrlPathPlaceholderHandler,
  ruleActionTypeaheadUrlPathPlaceholderHandler,
  runActionUrlPathPlaceholderHandler,
  widgetMetadataUrlPathPlaceholderHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', widgetMetadataUrlPathPlaceholderHandler)
  .route('/', resourceAttachUrlPathPlaceholderHandler)
  .route('/', resourceTypeaheadUrlPathPlaceholderHandler)
  .route('/', formMetadataUrlPathPlaceholderHandler)
  .route('/', modalFormTypeaheadUrlPathPlaceholderHandler)
  .route('/', ruleActionTypeaheadUrlPathPlaceholderHandler)
  .route('/', onChangeCallbackPathPlaceholderHandler)
  .route('/', onSubmitCallbackPathPlaceholderHandler)
  .route('/', runActionUrlPathPlaceholderHandler)
  .route('/', actionMetadataUrlPathPlaceholderHandler)
  .route('/', actionOnChangeCallbackPathPlaceholderHandler)
  .route('/', actionOnSubmitCallbackPathPlaceholderHandler)

export default app
