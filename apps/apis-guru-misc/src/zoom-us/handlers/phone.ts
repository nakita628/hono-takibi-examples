import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePhoneUsersUserIdCallingPlansTypeRoute,
  deletePhoneUsersUserIdCallLogsCallLogIdRoute,
  deletePhoneUsersUserIdPhoneNumbersPhoneNumberIdRoute,
  deletePhoneUsersUserIdSettingsSettingTypeRoute,
  deletePhoneVoiceMailsVoicemailIdRoute,
  getPhoneCallingPlansRoute,
  getPhoneCallLogsRoute,
  getPhoneNumbersNumberIdRoute,
  getPhoneNumbersRoute,
  getPhoneRecordingsRoute,
  getPhoneSettingTemplatesRoute,
  getPhoneSettingTemplatesTemplateIdRoute,
  getPhoneSipTrunkTrunksRoute,
  getPhoneUsersRoute,
  getPhoneUsersUserIdCallLogsRoute,
  getPhoneUsersUserIdRecordingsRoute,
  getPhoneUsersUserIdRoute,
  getPhoneUsersUserIdSettingsRoute,
  getPhoneUsersUserIdVoiceMailsRoute,
  patchAccountsAccountIdPhoneSettingsRoute,
  patchAccountsAccountIdPhoneSipTrunkTrunksSipTrunkIdRoute,
  patchPhoneNumbersNumberIdRoute,
  patchPhoneSettingTemplatesTemplateIdRoute,
  patchPhoneUsersUserIdRoute,
  patchPhoneUsersUserIdSettingsSettingTypeRoute,
  postAccountsAccountIdPhoneSetupRoute,
  postAccountsAccountIdPhoneSipTrunkTrunksRoute,
  postPhoneByocNumbersRoute,
  postPhoneSettingTemplatesRoute,
  postPhoneUsersUserIdCallingPlansRoute,
  postPhoneUsersUserIdPhoneNumbersRoute,
  postPhoneUsersUserIdSettingsSettingTypeRoute,
  putPhoneCompanyNumberRoute,
} from '../routes'

const app = new OpenAPIHono()

export const phoneHandler = app
  .openapi(patchAccountsAccountIdPhoneSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdPhoneSetupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdPhoneSipTrunkTrunksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdPhoneSipTrunkTrunksSipTrunkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneByocNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneCallLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneCallingPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPhoneCompanyNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneNumbersNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneNumbersNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneSettingTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneSettingTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneSettingTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneSettingTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneSipTrunkTrunksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneUsersUserIdCallLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneUsersUserIdCallLogsCallLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneUsersUserIdCallingPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneUsersUserIdCallingPlansTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneUsersUserIdPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneUsersUserIdPhoneNumbersPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneUsersUserIdRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneUsersUserIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneUsersUserIdSettingsSettingTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneUsersUserIdSettingsSettingTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneUsersUserIdSettingsSettingTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneUsersUserIdVoiceMailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneVoiceMailsVoicemailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
