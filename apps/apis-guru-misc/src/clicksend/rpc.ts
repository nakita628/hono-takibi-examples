import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccount(options?: ClientRequestOptions) {
  return await parseResponse(client.account.$get(undefined, options))
}

export async function putAccount(
  args: InferRequestType<typeof client.account.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.$put(args, options))
}

export async function postAccount(
  args: InferRequestType<typeof client.account.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.$post(args, options))
}

export async function putAccountVerifySend(
  args: InferRequestType<(typeof client)['account-verify']['send']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['account-verify'].send.$put(args, options))
}

export async function putAccountVerifyVerifyActivationToken(
  args: InferRequestType<(typeof client)['account-verify']['verify'][':activation_token']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['account-verify'].verify[':activation_token'].$put(args, options),
  )
}

export async function getAccountUsageYearMonthType(
  args: InferRequestType<(typeof client.account.usage)[':year'][':month'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.usage[':year'][':month'][':type'].$get(args, options))
}

export async function getAutomationsEmailReceipt(options?: ClientRequestOptions) {
  return await parseResponse(client.automations.email.receipt.$get(undefined, options))
}

export async function postAutomationsEmailReceipt(
  args: InferRequestType<typeof client.automations.email.receipt.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automations.email.receipt.$post(args, options))
}

export async function getAutomationsEmailReceiptRuleId(
  args: InferRequestType<(typeof client.automations.email.receipt)[':rule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automations.email.receipt[':rule_id'].$get(args, options))
}

export async function putAutomationsEmailReceiptRuleId(
  args: InferRequestType<(typeof client.automations.email.receipt)[':rule_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automations.email.receipt[':rule_id'].$put(args, options))
}

export async function deleteAutomationsEmailReceiptRuleId(
  args: InferRequestType<(typeof client.automations.email.receipt)[':rule_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automations.email.receipt[':rule_id'].$delete(args, options))
}

export async function getAutomationsFaxInbound(options?: ClientRequestOptions) {
  return await parseResponse(client.automations.fax.inbound.$get(undefined, options))
}

export async function postAutomationsFaxInbound(
  args: InferRequestType<typeof client.automations.fax.inbound.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automations.fax.inbound.$post(args, options))
}

export async function getAutomationsFaxInboundInboundRuleId(
  args: InferRequestType<(typeof client.automations.fax.inbound)[':inbound_rule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automations.fax.inbound[':inbound_rule_id'].$get(args, options))
}

export async function putAutomationsFaxInboundInboundRuleId(
  args: InferRequestType<(typeof client.automations.fax.inbound)[':inbound_rule_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automations.fax.inbound[':inbound_rule_id'].$put(args, options))
}

export async function deleteAutomationsFaxInboundInboundRuleId(
  args: InferRequestType<(typeof client.automations.fax.inbound)[':inbound_rule_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automations.fax.inbound[':inbound_rule_id'].$delete(args, options),
  )
}

export async function getAutomationsFaxReceipts(options?: ClientRequestOptions) {
  return await parseResponse(client.automations.fax.receipts.$get(undefined, options))
}

export async function postAutomationsFaxReceipts(
  args: InferRequestType<typeof client.automations.fax.receipts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automations.fax.receipts.$post(args, options))
}

export async function getAutomationsFaxReceiptsRuleId(
  args: InferRequestType<(typeof client.automations.fax.receipts)[':rule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automations.fax.receipts[':rule_id'].$get(args, options))
}

export async function putAutomationsFaxReceiptsRuleId(
  args: InferRequestType<(typeof client.automations.fax.receipts)[':rule_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automations.fax.receipts[':rule_id'].$put(args, options))
}

export async function deleteAutomationsFaxReceiptsRuleId(
  args: InferRequestType<(typeof client.automations.fax.receipts)[':rule_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automations.fax.receipts[':rule_id'].$delete(args, options))
}

export async function getAutomationsSmsInbound(options?: ClientRequestOptions) {
  return await parseResponse(client.automations.sms.inbound.$get(undefined, options))
}

export async function postAutomationsSmsInboundIndex(
  args: InferRequestType<typeof client.automations.sms.inbound.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automations.sms.inbound.index.$post(args, options))
}

export async function getAutomationsSmsInboundInboundRuleId(
  args: InferRequestType<(typeof client.automations.sms.inbound)[':inbound_rule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automations.sms.inbound[':inbound_rule_id'].$get(args, options))
}

export async function putAutomationsSmsInboundInboundRuleId(
  args: InferRequestType<(typeof client.automations.sms.inbound)[':inbound_rule_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automations.sms.inbound[':inbound_rule_id'].$put(args, options))
}

export async function deleteAutomationsSmsInboundInboundRuleId(
  args: InferRequestType<(typeof client.automations.sms.inbound)[':inbound_rule_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automations.sms.inbound[':inbound_rule_id'].$delete(args, options),
  )
}

export async function getAutomationsSmsReceipts(options?: ClientRequestOptions) {
  return await parseResponse(client.automations.sms.receipts.$get(undefined, options))
}

export async function postAutomationsSmsReceipts(
  args: InferRequestType<typeof client.automations.sms.receipts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automations.sms.receipts.$post(args, options))
}

export async function getAutomationsSmsReceiptsReceiptRuleId(
  args: InferRequestType<(typeof client.automations.sms.receipts)[':receipt_rule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automations.sms.receipts[':receipt_rule_id'].$get(args, options),
  )
}

export async function putAutomationsSmsReceiptsReceiptRuleId(
  args: InferRequestType<(typeof client.automations.sms.receipts)[':receipt_rule_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automations.sms.receipts[':receipt_rule_id'].$put(args, options),
  )
}

export async function deleteAutomationsSmsReceiptsReceiptRuleId(
  args: InferRequestType<(typeof client.automations.sms.receipts)[':receipt_rule_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automations.sms.receipts[':receipt_rule_id'].$delete(args, options),
  )
}

export async function getAutomationsVoiceReceipts(options?: ClientRequestOptions) {
  return await parseResponse(client.automations.voice.receipts.$get(undefined, options))
}

export async function postAutomationsVoiceReceipts(
  args: InferRequestType<typeof client.automations.voice.receipts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automations.voice.receipts.$post(args, options))
}

export async function getAutomationsVoiceReceiptsReceiptRuleId(
  args: InferRequestType<(typeof client.automations.voice.receipts)[':receipt_rule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automations.voice.receipts[':receipt_rule_id'].$get(args, options),
  )
}

export async function putAutomationsVoiceReceiptsReceiptRuleId(
  args: InferRequestType<(typeof client.automations.voice.receipts)[':receipt_rule_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automations.voice.receipts[':receipt_rule_id'].$put(args, options),
  )
}

export async function deleteAutomationsVoiceReceiptsReceiptRuleId(
  args: InferRequestType<(typeof client.automations.voice.receipts)[':receipt_rule_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automations.voice.receipts[':receipt_rule_id'].$delete(args, options),
  )
}

export async function getContactSuggestions(options?: ClientRequestOptions) {
  return await parseResponse(client['contact-suggestions'].$get(undefined, options))
}

export async function getCountries(options?: ClientRequestOptions) {
  return await parseResponse(client.countries.$get(undefined, options))
}

export async function getDeliveryIssues(options?: ClientRequestOptions) {
  return await parseResponse(client['delivery-issues'].$get(undefined, options))
}

export async function postDeliveryIssues(
  args: InferRequestType<(typeof client)['delivery-issues']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['delivery-issues'].$post(args, options))
}

export async function getEmailCampaigns(options?: ClientRequestOptions) {
  return await parseResponse(client['email-campaigns'].$get(undefined, options))
}

export async function postEmailCampaignsPrice(
  args: InferRequestType<(typeof client)['email-campaigns']['price']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['email-campaigns'].price.$post(args, options))
}

export async function postEmailCampaignsSend(
  args: InferRequestType<(typeof client)['email-campaigns']['send']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['email-campaigns'].send.$post(args, options))
}

export async function getEmailCampaignsCampaignIdHistory(
  args: InferRequestType<(typeof client)['email-campaigns'][':campaign_id']['history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['email-campaigns'][':campaign_id'].history.$get(args, options))
}

export async function getEmailCampaignsEmailCampaignId(
  args: InferRequestType<(typeof client)['email-campaigns'][':email_campaign_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['email-campaigns'][':email_campaign_id'].$get(args, options))
}

export async function putEmailCampaignsEmailCampaignId(
  args: InferRequestType<(typeof client)['email-campaigns'][':email_campaign_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['email-campaigns'][':email_campaign_id'].$put(args, options))
}

export async function putEmailCampaignsEmailCampaignIdCancel(
  args: InferRequestType<
    (typeof client)['email-campaigns'][':email_campaign_id']['cancel']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['email-campaigns'][':email_campaign_id'].cancel.$put(args, options),
  )
}

export async function putEmailAddressVerifyEmailAddressIdSend(
  args: InferRequestType<
    (typeof client.email)['address-verify'][':email_address_id']['send']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email['address-verify'][':email_address_id'].send.$put(args, options),
  )
}

export async function putEmailAddressVerifyEmailAddressIdVerifyActivationToken(
  args: InferRequestType<
    (typeof client.email)['address-verify'][':email_address_id']['verify'][':activation_token']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email['address-verify'][':email_address_id'].verify[':activation_token'].$put(
      args,
      options,
    ),
  )
}

export async function getEmailAddresses(options?: ClientRequestOptions) {
  return await parseResponse(client.email.addresses.$get(undefined, options))
}

export async function postEmailAddresses(
  args: InferRequestType<typeof client.email.addresses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email.addresses.$post(args, options))
}

export async function getEmailAddressesEmailAddressId(
  args: InferRequestType<(typeof client.email.addresses)[':email_address_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email.addresses[':email_address_id'].$get(args, options))
}

export async function deleteEmailAddressesEmailAddressId(
  args: InferRequestType<(typeof client.email.addresses)[':email_address_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email.addresses[':email_address_id'].$delete(args, options))
}

export async function getEmailHistory(options?: ClientRequestOptions) {
  return await parseResponse(client.email.history.$get(undefined, options))
}

export async function getEmailHistoryExportFilenameFilename(
  args: InferRequestType<(typeof client.email.history)['export?filename=:filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email.history['export?filename=:filename'].$get(args, options))
}

export async function getEmailMasterTemplates(options?: ClientRequestOptions) {
  return await parseResponse(client.email['master-templates'].$get(undefined, options))
}

export async function getEmailMasterTemplatesCategories(options?: ClientRequestOptions) {
  return await parseResponse(client.email['master-templates-categories'].$get(undefined, options))
}

export async function getEmailMasterTemplatesCategoriesCategoryId(
  args: InferRequestType<
    (typeof client.email)['master-templates-categories'][':category_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email['master-templates-categories'][':category_id'].$get(args, options),
  )
}

export async function getEmailMasterTemplatesCategoriesCategoryIdMasterTemplates(
  args: InferRequestType<
    (typeof client.email)['master-templates-categories'][':category_id']['master-templates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.email['master-templates-categories'][':category_id']['master-templates'].$get(
      args,
      options,
    ),
  )
}

export async function getEmailMasterTemplatesTemplateId(
  args: InferRequestType<(typeof client.email)['master-templates'][':template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email['master-templates'][':template_id'].$get(args, options))
}

export async function postEmailPrice(
  args: InferRequestType<typeof client.email.price.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email.price.$post(args, options))
}

export async function postEmailReceipts(
  args: InferRequestType<typeof client.email.receipts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email.receipts.$post(args, options))
}

export async function postEmailSend(
  args: InferRequestType<typeof client.email.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email.send.$post(args, options))
}

export async function getEmailTemplates(options?: ClientRequestOptions) {
  return await parseResponse(client.email.templates.$get(undefined, options))
}

export async function postEmailTemplates(
  args: InferRequestType<typeof client.email.templates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email.templates.$post(args, options))
}

export async function postEmailTemplatesImagesTemplateId(
  args: InferRequestType<(typeof client.email)['templates-images'][':template_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email['templates-images'][':template_id'].$post(args, options))
}

export async function getEmailTemplatesTemplateId(
  args: InferRequestType<(typeof client.email.templates)[':template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email.templates[':template_id'].$get(args, options))
}

export async function putEmailTemplatesTemplateId(
  args: InferRequestType<(typeof client.email.templates)[':template_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email.templates[':template_id'].$put(args, options))
}

export async function deleteEmailTemplatesTemplateId(
  args: InferRequestType<(typeof client.email.templates)[':template_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.email.templates[':template_id'].$delete(args, options))
}

export async function getFaxHistoryExportFilenameFilename(
  args: InferRequestType<(typeof client.fax.history)['export?filename=:filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fax.history['export?filename=:filename'].$get(args, options))
}

export async function getFaxHistoryDateFromDateFromDateToDateToQQOrderByOrderBy(
  args: InferRequestType<
    (typeof client.fax)['history?date_from=:date_from&date_to=:date_to&q=:q&order_by=:order_by']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.fax['history?date_from=:date_from&date_to=:date_to&q=:q&order_by=:order_by'].$get(
      args,
      options,
    ),
  )
}

export async function postFaxPrice(
  args: InferRequestType<typeof client.fax.price.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fax.price.$post(args, options))
}

export async function getFaxReceipts(options?: ClientRequestOptions) {
  return await parseResponse(client.fax.receipts.$get(undefined, options))
}

export async function postFaxReceipts(
  args: InferRequestType<typeof client.fax.receipts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fax.receipts.$post(args, options))
}

export async function putFaxReceiptsRead(
  args: InferRequestType<(typeof client.fax)['receipts-read']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fax['receipts-read'].$put(args, options))
}

export async function getFaxReceiptsMessageId(
  args: InferRequestType<(typeof client.fax.receipts)[':message_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fax.receipts[':message_id'].$get(args, options))
}

export async function postFaxSend(
  args: InferRequestType<typeof client.fax.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fax.send.$post(args, options))
}

export async function putForgotPassword(
  args: InferRequestType<(typeof client)['forgot-password']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['forgot-password'].$put(args, options))
}

export async function putForgotPasswordVerify(
  args: InferRequestType<(typeof client)['forgot-password']['verify']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['forgot-password'].verify.$put(args, options))
}

export async function putForgotUsername(
  args: InferRequestType<(typeof client)['forgot-username']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['forgot-username'].$put(args, options))
}

export async function getLists(options?: ClientRequestOptions) {
  return await parseResponse(client.lists.$get(undefined, options))
}

export async function postLists(
  args: InferRequestType<typeof client.lists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists.$post(args, options))
}

export async function putListsFromListIdContactsContactIdToListId(
  args: InferRequestType<
    (typeof client.lists)[':from_list_id']['contacts'][':contact_id'][':to_list_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lists[':from_list_id'].contacts[':contact_id'][':to_list_id'].$put(args, options),
  )
}

export async function getListsListId(
  args: InferRequestType<(typeof client.lists)[':list_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':list_id'].$get(args, options))
}

export async function putListsListId(
  args: InferRequestType<(typeof client.lists)[':list_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':list_id'].$put(args, options))
}

export async function deleteListsListId(
  args: InferRequestType<(typeof client.lists)[':list_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':list_id'].$delete(args, options))
}

export async function getListsListIdContacts(
  args: InferRequestType<(typeof client.lists)[':list_id']['contacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':list_id'].contacts.$get(args, options))
}

export async function postListsListIdContacts(
  args: InferRequestType<(typeof client.lists)[':list_id']['contacts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':list_id'].contacts.$post(args, options))
}

export async function getListsListIdContactsContactId(
  args: InferRequestType<(typeof client.lists)[':list_id']['contacts'][':contact_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':list_id'].contacts[':contact_id'].$get(args, options))
}

export async function putListsListIdContactsContactId(
  args: InferRequestType<(typeof client.lists)[':list_id']['contacts'][':contact_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':list_id'].contacts[':contact_id'].$put(args, options))
}

export async function deleteListsListIdContactsContactId(
  args: InferRequestType<(typeof client.lists)[':list_id']['contacts'][':contact_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lists[':list_id'].contacts[':contact_id'].$delete(args, options),
  )
}

export async function getListsListIdExportFilenameFilename(
  args: InferRequestType<(typeof client.lists)[':list_id']['export?filename=:filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lists[':list_id']['export?filename=:filename'].$get(args, options),
  )
}

export async function postListsListIdImport(
  args: InferRequestType<(typeof client.lists)[':list_id']['import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':list_id'].import.$post(args, options))
}

export async function postListsListIdImportCsvPreview(
  args: InferRequestType<(typeof client.lists)[':list_id']['import-csv-preview']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':list_id']['import-csv-preview'].$post(args, options))
}

export async function getListsListIdImportFields(
  args: InferRequestType<(typeof client.lists)[':list_id']['import-fields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':list_id']['import-fields'].$get(args, options))
}

export async function putListsListIdRemoveDuplicates(
  args: InferRequestType<(typeof client.lists)[':list_id']['remove-duplicates']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':list_id']['remove-duplicates'].$put(args, options))
}

export async function putListsListIdRemoveOptedOutContactsOptOutListId(
  args: InferRequestType<
    (typeof client.lists)[':list_id']['remove-opted-out-contacts'][':opt_out_list_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lists[':list_id']['remove-opted-out-contacts'][':opt_out_list_id'].$put(args, options),
  )
}

export async function putMmsCancelAll(options?: ClientRequestOptions) {
  return await parseResponse(client.mms['cancel-all'].$put(undefined, options))
}

export async function getMmsHistoryExportFilenameFilename(
  args: InferRequestType<(typeof client.mms.history)['export?filename=:filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mms.history['export?filename=:filename'].$get(args, options))
}

export async function getMmsHistoryQQOrderByOrderByDateFromDateFromDateToDateTo(
  args: InferRequestType<
    (typeof client.mms)['history?q=:q&order_by=:order_by&date_from=:date_from&date_to=:date_to']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mms['history?q=:q&order_by=:order_by&date_from=:date_from&date_to=:date_to'].$get(
      args,
      options,
    ),
  )
}

export async function postMmsPrice(
  args: InferRequestType<typeof client.mms.price.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mms.price.$post(args, options))
}

export async function getMmsReceipts(options?: ClientRequestOptions) {
  return await parseResponse(client.mms.receipts.$get(undefined, options))
}

export async function putMmsReceiptsRead(options?: ClientRequestOptions) {
  return await parseResponse(client.mms['receipts-read'].$put(undefined, options))
}

export async function getMmsReceiptsMessageId(
  args: InferRequestType<(typeof client.mms.receipts)[':message_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mms.receipts[':message_id'].$get(args, options))
}

export async function postMmsSend(
  args: InferRequestType<typeof client.mms.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mms.send.$post(args, options))
}

export async function putMmsMessageIdCancel(
  args: InferRequestType<(typeof client.mms)[':message_id']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mms[':message_id'].cancel.$put(args, options))
}

export async function getNumbers(options?: ClientRequestOptions) {
  return await parseResponse(client.numbers.$get(undefined, options))
}

export async function postNumbersBuyDedicatedNumber(
  args: InferRequestType<(typeof client.numbers.buy)[':dedicated_number']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.numbers.buy[':dedicated_number'].$post(args, options))
}

export async function getNumbersSearchCountrySearch1SearchType2(
  args: InferRequestType<
    (typeof client.numbers.search)[':country?:search=1&:search_type=2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.numbers.search[':country?:search=1&:search_type=2'].$get(args, options),
  )
}

export async function getPostDirectMailCampaigns(options?: ClientRequestOptions) {
  return await parseResponse(client.post['direct-mail'].campaigns.$get(undefined, options))
}

export async function postPostDirectMailCampaignsPrice(
  args: InferRequestType<(typeof client.post)['direct-mail']['campaigns']['price']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.post['direct-mail'].campaigns.price.$post(args, options))
}

export async function postPostDirectMailCampaignsSend(
  args: InferRequestType<(typeof client.post)['direct-mail']['campaigns']['send']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.post['direct-mail'].campaigns.send.$post(args, options))
}

export async function getPostDirectMailLocationsSearchCountryQQuery(
  args: InferRequestType<
    (typeof client.post)['direct-mail']['locations']['search'][':country']['?q=:query']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.post['direct-mail'].locations.search[':country']['?q=:query'].$get(args, options),
  )
}

export async function postPostLettersDetectAddress(
  args: InferRequestType<(typeof client.post.letters)['detect-address']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.post.letters['detect-address'].$post(args, options))
}

export async function getPostLettersHistory(options?: ClientRequestOptions) {
  return await parseResponse(client.post.letters.history.$get(undefined, options))
}

export async function getPostLettersHistoryExportFilenameFilename(
  args: InferRequestType<(typeof client.post.letters.history)['export?filename=:filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.post.letters.history['export?filename=:filename'].$get(args, options),
  )
}

export async function postPostLettersPrice(
  args: InferRequestType<typeof client.post.letters.price.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.post.letters.price.$post(args, options))
}

export async function postPostLettersSend(
  args: InferRequestType<typeof client.post.letters.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.post.letters.send.$post(args, options))
}

export async function getPostPostcardsExportFilenameFilename(
  args: InferRequestType<(typeof client.post.postcards)['export?filename=:filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.post.postcards['export?filename=:filename'].$get(args, options))
}

export async function getPostPostcardsHistory(options?: ClientRequestOptions) {
  return await parseResponse(client.post.postcards.history.$get(undefined, options))
}

export async function postPostPostcardsPrice(
  args: InferRequestType<typeof client.post.postcards.price.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.post.postcards.price.$post(args, options))
}

export async function postPostPostcardsSend(
  args: InferRequestType<typeof client.post.postcards.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.post.postcards.send.$post(args, options))
}

export async function getPostReturnAddresses(options?: ClientRequestOptions) {
  return await parseResponse(client.post['return-addresses'].$get(undefined, options))
}

export async function postPostReturnAddresses(
  args: InferRequestType<(typeof client.post)['return-addresses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.post['return-addresses'].$post(args, options))
}

export async function getPostReturnAddressesReturnAddressId(
  args: InferRequestType<(typeof client.post)['return-addresses'][':return_address_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.post['return-addresses'][':return_address_id'].$get(args, options),
  )
}

export async function putPostReturnAddressesReturnAddressId(
  args: InferRequestType<(typeof client.post)['return-addresses'][':return_address_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.post['return-addresses'][':return_address_id'].$put(args, options),
  )
}

export async function deletePostReturnAddressesReturnAddressId(
  args: InferRequestType<(typeof client.post)['return-addresses'][':return_address_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.post['return-addresses'][':return_address_id'].$delete(args, options),
  )
}

export async function getPricingCountryCurrencyCurrency(
  args: InferRequestType<(typeof client.pricing)[':country?currency=:currency']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pricing[':country?currency=:currency'].$get(args, options))
}

export async function getRechargeCreditCard(options?: ClientRequestOptions) {
  return await parseResponse(client.recharge['credit-card'].$get(undefined, options))
}

export async function putRechargeCreditCard(
  args: InferRequestType<(typeof client.recharge)['credit-card']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recharge['credit-card'].$put(args, options))
}

export async function getRechargePackagesCountryCountry(
  args: InferRequestType<(typeof client.recharge)['packages?country=:country']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recharge['packages?country=:country'].$get(args, options))
}

export async function putRechargePurchasePackageId(
  args: InferRequestType<(typeof client.recharge.purchase)[':package_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recharge.purchase[':package_id'].$put(args, options))
}

export async function getRechargeTransactions(options?: ClientRequestOptions) {
  return await parseResponse(client.recharge.transactions.$get(undefined, options))
}

export async function getRechargeTransactionsTransactionId(
  args: InferRequestType<(typeof client.recharge.transactions)[':transaction_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recharge.transactions[':transaction_id'].$get(args, options))
}

export async function getReferralAccounts(options?: ClientRequestOptions) {
  return await parseResponse(client.referral.accounts.$get(undefined, options))
}

export async function getReseller(options?: ClientRequestOptions) {
  return await parseResponse(client.reseller.$get(undefined, options))
}

export async function putReseller(
  args: InferRequestType<typeof client.reseller.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reseller.$put(args, options))
}

export async function getResellerAccounts(options?: ClientRequestOptions) {
  return await parseResponse(client.reseller.accounts.$get(undefined, options))
}

export async function postResellerAccounts(
  args: InferRequestType<typeof client.reseller.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reseller.accounts.$post(args, options))
}

export async function postResellerAccountsPublic(
  args: InferRequestType<(typeof client.reseller)['accounts-public']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reseller['accounts-public'].$post(args, options))
}

export async function getResellerAccountsClientUserId(
  args: InferRequestType<(typeof client.reseller.accounts)[':client_user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reseller.accounts[':client_user_id'].$get(args, options))
}

export async function putResellerAccountsClientUserId(
  args: InferRequestType<(typeof client.reseller.accounts)[':client_user_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reseller.accounts[':client_user_id'].$put(args, options))
}

export async function putResellerTransferCredit(
  args: InferRequestType<(typeof client.reseller)['transfer-credit']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reseller['transfer-credit'].$put(args, options))
}

export async function getResellerSubdomain(
  args: InferRequestType<(typeof client.reseller)[':subdomain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reseller[':subdomain'].$get(args, options))
}

export async function getSdkDownloadType(
  args: InferRequestType<(typeof client)['sdk-download'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sdk-download'][':type'].$get(args, options))
}

export async function getSearchContactsListsQQ(
  args: InferRequestType<(typeof client.search)['contacts-lists?q=:q']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search['contacts-lists?q=:q'].$get(args, options))
}

export async function getSmsCampaigns(options?: ClientRequestOptions) {
  return await parseResponse(client['sms-campaigns'].$get(undefined, options))
}

export async function postSmsCampaignsPrice(
  args: InferRequestType<(typeof client)['sms-campaigns']['price']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sms-campaigns'].price.$post(args, options))
}

export async function postSmsCampaignsSend(
  args: InferRequestType<(typeof client)['sms-campaigns']['send']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sms-campaigns'].send.$post(args, options))
}

export async function getSmsCampaignsCampaignIdLinkExportFilenameFilename(
  args: InferRequestType<
    (typeof client)['sms-campaigns'][':campaign_id']['link-export?filename=:filename']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sms-campaigns'][':campaign_id']['link-export?filename=:filename'].$get(args, options),
  )
}

export async function getSmsCampaignsCampaignIdLinkStatistics(
  args: InferRequestType<
    (typeof client)['sms-campaigns'][':campaign_id']['link-statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sms-campaigns'][':campaign_id']['link-statistics'].$get(args, options),
  )
}

export async function getSmsCampaignsCampaignIdLinkTracking(
  args: InferRequestType<(typeof client)['sms-campaigns'][':campaign_id']['link-tracking']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sms-campaigns'][':campaign_id']['link-tracking'].$get(args, options),
  )
}

export async function getSmsCampaignsSmsCampaignId(
  args: InferRequestType<(typeof client)['sms-campaigns'][':sms_campaign_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sms-campaigns'][':sms_campaign_id'].$get(args, options))
}

export async function putSmsCampaignsSmsCampaignId(
  args: InferRequestType<(typeof client)['sms-campaigns'][':sms_campaign_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sms-campaigns'][':sms_campaign_id'].$put(args, options))
}

export async function putSmsCampaignsSmsCampaignIdCancel(
  args: InferRequestType<(typeof client)['sms-campaigns'][':sms_campaign_id']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sms-campaigns'][':sms_campaign_id'].cancel.$put(args, options))
}

export async function putSmsCancelAll(options?: ClientRequestOptions) {
  return await parseResponse(client.sms['cancel-all'].$put(undefined, options))
}

export async function getSmsEmailSms(options?: ClientRequestOptions) {
  return await parseResponse(client.sms['email-sms'].$get(undefined, options))
}

export async function postSmsEmailSms(
  args: InferRequestType<(typeof client.sms)['email-sms']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms['email-sms'].$post(args, options))
}

export async function getSmsEmailSmsStrippedStrings(options?: ClientRequestOptions) {
  return await parseResponse(client.sms['email-sms-stripped-strings'].$get(undefined, options))
}

export async function postSmsEmailSmsStrippedStrings(
  args: InferRequestType<(typeof client.sms)['email-sms-stripped-strings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms['email-sms-stripped-strings'].$post(args, options))
}

export async function getSmsEmailSmsStrippedStringsRuleId(
  args: InferRequestType<(typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sms['email-sms-stripped-strings'][':rule_id'].$get(args, options),
  )
}

export async function putSmsEmailSmsStrippedStringsRuleId(
  args: InferRequestType<(typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sms['email-sms-stripped-strings'][':rule_id'].$put(args, options),
  )
}

export async function deleteSmsEmailSmsStrippedStringsRuleId(
  args: InferRequestType<(typeof client.sms)['email-sms-stripped-strings'][':rule_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sms['email-sms-stripped-strings'][':rule_id'].$delete(args, options),
  )
}

export async function getSmsEmailSmsEmailAddressId(
  args: InferRequestType<(typeof client.sms)['email-sms'][':email_address_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms['email-sms'][':email_address_id'].$get(args, options))
}

export async function putSmsEmailSmsEmailAddressId(
  args: InferRequestType<(typeof client.sms)['email-sms'][':email_address_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms['email-sms'][':email_address_id'].$put(args, options))
}

export async function deleteSmsEmailSmsEmailAddressId(
  args: InferRequestType<(typeof client.sms)['email-sms'][':email_address_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms['email-sms'][':email_address_id'].$delete(args, options))
}

export async function getSmsHistoryExportFilenameFilename(
  args: InferRequestType<(typeof client.sms.history)['export?filename=:filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms.history['export?filename=:filename'].$get(args, options))
}

export async function getSmsHistoryDateFromDateFromDateToDateTo(
  args: InferRequestType<
    (typeof client.sms)['history?date_from=:date_from&date_to=:date_to']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sms['history?date_from=:date_from&date_to=:date_to'].$get(args, options),
  )
}

export async function getSmsInbound(options?: ClientRequestOptions) {
  return await parseResponse(client.sms.inbound.$get(undefined, options))
}

export async function postSmsInbound(
  args: InferRequestType<typeof client.sms.inbound.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms.inbound.$post(args, options))
}

export async function putSmsInboundRead(
  args: InferRequestType<(typeof client.sms)['inbound-read']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms['inbound-read'].$put(args, options))
}

export async function putSmsInboundReadMessageId(
  args: InferRequestType<(typeof client.sms)['inbound-read'][':message_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms['inbound-read'][':message_id'].$put(args, options))
}

export async function getSmsInboundOutboundMessageId(
  args: InferRequestType<(typeof client.sms.inbound)[':outbound_message_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms.inbound[':outbound_message_id'].$get(args, options))
}

export async function postSmsPrice(
  args: InferRequestType<typeof client.sms.price.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms.price.$post(args, options))
}

export async function getSmsReceipts(options?: ClientRequestOptions) {
  return await parseResponse(client.sms.receipts.$get(undefined, options))
}

export async function postSmsReceipts(
  args: InferRequestType<typeof client.sms.receipts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms.receipts.$post(args, options))
}

export async function putSmsReceiptsRead(
  args: InferRequestType<(typeof client.sms)['receipts-read']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms['receipts-read'].$put(args, options))
}

export async function getSmsReceiptsMessageId(
  args: InferRequestType<(typeof client.sms.receipts)[':message_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms.receipts[':message_id'].$get(args, options))
}

export async function postSmsSend(
  args: InferRequestType<typeof client.sms.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms.send.$post(args, options))
}

export async function getSmsTemplates(options?: ClientRequestOptions) {
  return await parseResponse(client.sms.templates.$get(undefined, options))
}

export async function postSmsTemplates(
  args: InferRequestType<typeof client.sms.templates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms.templates.$post(args, options))
}

export async function putSmsTemplatesTemplateId(
  args: InferRequestType<(typeof client.sms.templates)[':template_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms.templates[':template_id'].$put(args, options))
}

export async function deleteSmsTemplatesTemplateId(
  args: InferRequestType<(typeof client.sms.templates)[':template_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms.templates[':template_id'].$delete(args, options))
}

export async function putSmsMessageIdCancel(
  args: InferRequestType<(typeof client.sms)[':message_id']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms[':message_id'].cancel.$put(args, options))
}

export async function getStatisticsSms(options?: ClientRequestOptions) {
  return await parseResponse(client.statistics.sms.$get(undefined, options))
}

export async function getStatisticsVoice(options?: ClientRequestOptions) {
  return await parseResponse(client.statistics.voice.$get(undefined, options))
}

export async function getSubaccounts(options?: ClientRequestOptions) {
  return await parseResponse(client.subaccounts.$get(undefined, options))
}

export async function postSubaccounts(
  args: InferRequestType<typeof client.subaccounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subaccounts.$post(args, options))
}

export async function getSubaccountsSubaccountId(
  args: InferRequestType<(typeof client.subaccounts)[':subaccount_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subaccounts[':subaccount_id'].$get(args, options))
}

export async function putSubaccountsSubaccountId(
  args: InferRequestType<(typeof client.subaccounts)[':subaccount_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subaccounts[':subaccount_id'].$put(args, options))
}

export async function deleteSubaccountsSubaccountId(
  args: InferRequestType<(typeof client.subaccounts)[':subaccount_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subaccounts[':subaccount_id'].$delete(args, options))
}

export async function putSubaccountsSubaccountIdRegenApiKey(
  args: InferRequestType<(typeof client.subaccounts)[':subaccount_id']['regen-api-key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subaccounts[':subaccount_id']['regen-api-key'].$put(args, options),
  )
}

export async function getTimezones(options?: ClientRequestOptions) {
  return await parseResponse(client.timezones.$get(undefined, options))
}

export async function postUploadsConvertConvert(
  args: InferRequestType<(typeof client)['uploads?convert=:convert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['uploads?convert=:convert'].$post(args, options))
}

export async function putVoiceCancelAll(options?: ClientRequestOptions) {
  return await parseResponse(client.voice['cancel-all'].$put(undefined, options))
}

export async function getVoiceHistoryExportFilenameFilename(
  args: InferRequestType<(typeof client.voice.history)['export?filename=:filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.voice.history['export?filename=:filename'].$get(args, options))
}

export async function getVoiceHistoryDateFromDateFromDateToDateTo(
  args: InferRequestType<
    (typeof client.voice)['history?date_from=:date_from&date_to=:date_to']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.voice['history?date_from=:date_from&date_to=:date_to'].$get(args, options),
  )
}

export async function getVoiceLang(options?: ClientRequestOptions) {
  return await parseResponse(client.voice.lang.$get(undefined, options))
}

export async function postVoicePrice(
  args: InferRequestType<typeof client.voice.price.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.voice.price.$post(args, options))
}

export async function getVoiceReceipts(options?: ClientRequestOptions) {
  return await parseResponse(client.voice.receipts.$get(undefined, options))
}

export async function postVoiceReceipts(
  args: InferRequestType<typeof client.voice.receipts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.voice.receipts.$post(args, options))
}

export async function putVoiceReceiptsReadDateBeforeDateBefore(
  args: InferRequestType<(typeof client.voice)['receipts-read?date_before=:date_before']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.voice['receipts-read?date_before=:date_before'].$put(args, options),
  )
}

export async function getVoiceReceiptsMessageId(
  args: InferRequestType<(typeof client.voice.receipts)[':message_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.voice.receipts[':message_id'].$get(args, options))
}

export async function postVoiceSend(
  args: InferRequestType<typeof client.voice.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.voice.send.$post(args, options))
}

export async function putVoiceMessageIdCancel(
  args: InferRequestType<(typeof client.voice)[':message_id']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.voice[':message_id'].cancel.$put(args, options))
}
