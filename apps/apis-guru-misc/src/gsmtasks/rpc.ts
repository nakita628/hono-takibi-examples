import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccountRolesIndex(
  args: InferRequestType<typeof client.account_roles.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account_roles.index.$get(args, options))
}

export async function postAccountRolesIndex(
  args: InferRequestType<typeof client.account_roles.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account_roles.index.$post(args, options))
}

export async function getAccountRolesIdIndex(
  args: InferRequestType<(typeof client.account_roles)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account_roles[':id'].index.$get(args, options))
}

export async function putAccountRolesIdIndex(
  args: InferRequestType<(typeof client.account_roles)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account_roles[':id'].index.$put(args, options))
}

export async function deleteAccountRolesIdIndex(
  args: InferRequestType<(typeof client.account_roles)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account_roles[':id'].index.$delete(args, options))
}

export async function patchAccountRolesIdIndex(
  args: InferRequestType<(typeof client.account_roles)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account_roles[':id'].index.$patch(args, options))
}

export async function postAccountRolesIdActivateIndex(
  args: InferRequestType<(typeof client.account_roles)[':id']['activate']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account_roles[':id'].activate.index.$post(args, options))
}

export async function postAccountRolesIdNotifyIndex(
  args: InferRequestType<(typeof client.account_roles)[':id']['notify']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account_roles[':id'].notify.index.$post(args, options))
}

export async function getAccountRolesIdTokenIndex(
  args: InferRequestType<(typeof client.account_roles)[':id']['token']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account_roles[':id'].token.index.$get(args, options))
}

export async function getAccountsIndex(
  args: InferRequestType<typeof client.accounts.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.index.$get(args, options))
}

export async function getAccountsIdIndex(
  args: InferRequestType<(typeof client.accounts)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':id'].index.$get(args, options))
}

export async function putAccountsIdIndex(
  args: InferRequestType<(typeof client.accounts)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':id'].index.$put(args, options))
}

export async function patchAccountsIdIndex(
  args: InferRequestType<(typeof client.accounts)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':id'].index.$patch(args, options))
}

export async function getAccountsIdBraintreeCustomerIndex(
  args: InferRequestType<(typeof client.accounts)[':id']['braintree_customer']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':id'].braintree_customer.index.$get(args, options))
}

export async function postAccountsIdChangeOwnerIndex(
  args: InferRequestType<(typeof client.accounts)[':id']['change_owner']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':id'].change_owner.index.$post(args, options))
}

export async function getAccountsIdManagersIndex(
  args: InferRequestType<(typeof client.accounts)[':id']['managers']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':id'].managers.index.$get(args, options))
}

export async function postAccountsIdManagersIndex(
  args: InferRequestType<(typeof client.accounts)[':id']['managers']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':id'].managers.index.$post(args, options))
}

export async function deleteAccountsIdManagersIndex(
  args: InferRequestType<(typeof client.accounts)[':id']['managers']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':id'].managers.index.$delete(args, options))
}

export async function putAccountsIdStripeAttachPaymentMethodIndex(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_attach_payment_method']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':id'].stripe_attach_payment_method.index.$put(args, options),
  )
}

export async function putAccountsIdStripeCreateSetupIntentIndex(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_create_setup_intent']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':id'].stripe_create_setup_intent.index.$put(args, options),
  )
}

export async function postAccountsIdStripeCreateSetupIntentIndex(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_create_setup_intent']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':id'].stripe_create_setup_intent.index.$post(args, options),
  )
}

export async function putAccountsIdStripeDetachPaymentMethodIndex(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_detach_payment_method']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':id'].stripe_detach_payment_method.index.$put(args, options),
  )
}

export async function getAccountsIdStripeGetPaymentMethodIndex(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_get_payment_method']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':id'].stripe_get_payment_method.index.$get(args, options),
  )
}

export async function getAccountsIdStripeGetSetupAttemptIndex(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_get_setup_attempt']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':id'].stripe_get_setup_attempt.index.$get(args, options),
  )
}

export async function getAccountsIdStripeGetSetupIntentIndex(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_get_setup_intent']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':id'].stripe_get_setup_intent.index.$get(args, options),
  )
}

export async function getAccountsIdStripePaymentMethodsIndex(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_payment_methods']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':id'].stripe_payment_methods.index.$get(args, options),
  )
}

export async function putAccountsIdStripeSetDefaultPaymentMethodIndex(
  args: InferRequestType<
    (typeof client.accounts)[':id']['stripe_set_default_payment_method']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':id'].stripe_set_default_payment_method.index.$put(args, options),
  )
}

export async function getAccountsIdStripeSetupIntentsIndex(
  args: InferRequestType<(typeof client.accounts)[':id']['stripe_setup_intents']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':id'].stripe_setup_intents.index.$get(args, options))
}

export async function getAccountsIdWorkersIndex(
  args: InferRequestType<(typeof client.accounts)[':id']['workers']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':id'].workers.index.$get(args, options))
}

export async function postAccountsIdWorkersIndex(
  args: InferRequestType<(typeof client.accounts)[':id']['workers']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':id'].workers.index.$post(args, options))
}

export async function deleteAccountsIdWorkersIndex(
  args: InferRequestType<(typeof client.accounts)[':id']['workers']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':id'].workers.index.$delete(args, options))
}

export async function getAddonsIndex(
  args: InferRequestType<typeof client.addons.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addons.index.$get(args, options))
}

export async function getAddonsIdIndex(
  args: InferRequestType<(typeof client.addons)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addons[':id'].index.$get(args, options))
}

export async function postAuthenticateIndex(
  args: InferRequestType<typeof client.authenticate.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authenticate.index.$post(args, options))
}

export async function getBillingCustomersIndex(
  args: InferRequestType<typeof client.billing.customers.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing.customers.index.$get(args, options))
}

export async function postBillingCustomersIndex(
  args: InferRequestType<typeof client.billing.customers.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing.customers.index.$post(args, options))
}

export async function getBillingCustomersIdIndex(
  args: InferRequestType<(typeof client.billing.customers)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing.customers[':id'].index.$get(args, options))
}

export async function putBillingCustomersIdIndex(
  args: InferRequestType<(typeof client.billing.customers)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing.customers[':id'].index.$put(args, options))
}

export async function patchBillingCustomersIdIndex(
  args: InferRequestType<(typeof client.billing.customers)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing.customers[':id'].index.$patch(args, options))
}

export async function getBillingCustomersIdClientTokenIndex(
  args: InferRequestType<(typeof client.billing.customers)[':id']['client_token']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing.customers[':id'].client_token.index.$get(args, options))
}

export async function getBillingInvoicesIndex(
  args: InferRequestType<typeof client.billing.invoices.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing.invoices.index.$get(args, options))
}

export async function getBillingInvoicesIdIndex(
  args: InferRequestType<(typeof client.billing.invoices)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing.invoices[':id'].index.$get(args, options))
}

export async function putBillingInvoicesIdIndex(
  args: InferRequestType<(typeof client.billing.invoices)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing.invoices[':id'].index.$put(args, options))
}

export async function patchBillingInvoicesIdIndex(
  args: InferRequestType<(typeof client.billing.invoices)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing.invoices[':id'].index.$patch(args, options))
}

export async function postBillingInvoicesIdMarkAsPaidIndex(
  args: InferRequestType<(typeof client.billing.invoices)[':id']['mark_as_paid']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing.invoices[':id'].mark_as_paid.index.$post(args, options))
}

export async function getBillingStripePaymentsIndex(
  args: InferRequestType<typeof client.billing.stripe_payments.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing.stripe_payments.index.$get(args, options))
}

export async function getBillingStripePaymentsIdIndex(
  args: InferRequestType<(typeof client.billing.stripe_payments)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing.stripe_payments[':id'].index.$get(args, options))
}

export async function getBillingTransactionsIndex(
  args: InferRequestType<typeof client.billing.transactions.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing.transactions.index.$get(args, options))
}

export async function getBillingTransactionsIdIndex(
  args: InferRequestType<(typeof client.billing.transactions)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing.transactions[':id'].index.$get(args, options))
}

export async function getClientRolesIndex(
  args: InferRequestType<typeof client.client_roles.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.client_roles.index.$get(args, options))
}

export async function postClientRolesIndex(
  args: InferRequestType<typeof client.client_roles.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.client_roles.index.$post(args, options))
}

export async function getClientRolesIdIndex(
  args: InferRequestType<(typeof client.client_roles)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.client_roles[':id'].index.$get(args, options))
}

export async function putClientRolesIdIndex(
  args: InferRequestType<(typeof client.client_roles)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.client_roles[':id'].index.$put(args, options))
}

export async function patchClientRolesIdIndex(
  args: InferRequestType<(typeof client.client_roles)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.client_roles[':id'].index.$patch(args, options))
}

export async function postClientRolesIdNotifyIndex(
  args: InferRequestType<(typeof client.client_roles)[':id']['notify']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.client_roles[':id'].notify.index.$post(args, options))
}

export async function getClientsIndex(
  args: InferRequestType<typeof client.clients.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clients.index.$get(args, options))
}

export async function postClientsIndex(
  args: InferRequestType<typeof client.clients.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clients.index.$post(args, options))
}

export async function getClientsIdIndex(
  args: InferRequestType<(typeof client.clients)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clients[':id'].index.$get(args, options))
}

export async function putClientsIdIndex(
  args: InferRequestType<(typeof client.clients)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clients[':id'].index.$put(args, options))
}

export async function patchClientsIdIndex(
  args: InferRequestType<(typeof client.clients)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clients[':id'].index.$patch(args, options))
}

export async function getConfigurationsIndex(
  args: InferRequestType<typeof client.configurations.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.configurations.index.$get(args, options))
}

export async function getContactAddressExportsIndex(
  args: InferRequestType<typeof client.contact_address_exports.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contact_address_exports.index.$get(args, options))
}

export async function getContactAddressImportIndex(
  args: InferRequestType<typeof client.contact_address_import.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contact_address_import.index.$get(args, options))
}

export async function postContactAddressImportIndex(
  args: InferRequestType<typeof client.contact_address_import.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contact_address_import.index.$post(args, options))
}

export async function getContactAddressImportIdIndex(
  args: InferRequestType<(typeof client.contact_address_import)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contact_address_import[':id'].index.$get(args, options))
}

export async function getContactAddressesIndex(
  args: InferRequestType<typeof client.contact_addresses.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contact_addresses.index.$get(args, options))
}

export async function postContactAddressesIndex(
  args: InferRequestType<typeof client.contact_addresses.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contact_addresses.index.$post(args, options))
}

export async function getContactAddressesIdIndex(
  args: InferRequestType<(typeof client.contact_addresses)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contact_addresses[':id'].index.$get(args, options))
}

export async function putContactAddressesIdIndex(
  args: InferRequestType<(typeof client.contact_addresses)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contact_addresses[':id'].index.$put(args, options))
}

export async function patchContactAddressesIdIndex(
  args: InferRequestType<(typeof client.contact_addresses)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contact_addresses[':id'].index.$patch(args, options))
}

export async function getDevicesIndex(
  args: InferRequestType<typeof client.devices.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices.index.$get(args, options))
}

export async function postDevicesIndex(
  args: InferRequestType<typeof client.devices.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices.index.$post(args, options))
}

export async function getDevicesIdIndex(
  args: InferRequestType<(typeof client.devices)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':id'].index.$get(args, options))
}

export async function getDocsSchemaIndex(
  args: InferRequestType<typeof client.docs.schema.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.docs.schema.index.$get(args, options))
}

export async function getDocumentsIndex(
  args: InferRequestType<typeof client.documents.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents.index.$get(args, options))
}

export async function postDocumentsIndex(
  args: InferRequestType<typeof client.documents.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents.index.$post(args, options))
}

export async function postDocumentsBatchDeleteIndex(
  args: InferRequestType<typeof client.documents.batch_delete.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents.batch_delete.index.$post(args, options))
}

export async function getDocumentsIdIndex(
  args: InferRequestType<(typeof client.documents)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':id'].index.$get(args, options))
}

export async function deleteDocumentsIdIndex(
  args: InferRequestType<(typeof client.documents)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':id'].index.$delete(args, options))
}

export async function getEmailsIndex(
  args: InferRequestType<typeof client.emails.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emails.index.$get(args, options))
}

export async function postEmailsIndex(
  args: InferRequestType<typeof client.emails.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emails.index.$post(args, options))
}

export async function getEmailsIdIndex(
  args: InferRequestType<(typeof client.emails)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emails[':id'].index.$get(args, options))
}

export async function putEmailsIdIndex(
  args: InferRequestType<(typeof client.emails)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emails[':id'].index.$put(args, options))
}

export async function deleteEmailsIdIndex(
  args: InferRequestType<(typeof client.emails)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emails[':id'].index.$delete(args, options))
}

export async function patchEmailsIdIndex(
  args: InferRequestType<(typeof client.emails)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emails[':id'].index.$patch(args, options))
}

export async function postEmailsIdResendIndex(
  args: InferRequestType<(typeof client.emails)[':id']['resend']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emails[':id'].resend.index.$post(args, options))
}

export async function getExportsIndex(
  args: InferRequestType<typeof client.exports.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.index.$get(args, options))
}

export async function postExportsIndex(
  args: InferRequestType<typeof client.exports.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.index.$post(args, options))
}

export async function getExportsIdIndex(
  args: InferRequestType<(typeof client.exports)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports[':id'].index.$get(args, options))
}

export async function putExportsIdIndex(
  args: InferRequestType<(typeof client.exports)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports[':id'].index.$put(args, options))
}

export async function deleteExportsIdIndex(
  args: InferRequestType<(typeof client.exports)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports[':id'].index.$delete(args, options))
}

export async function patchExportsIdIndex(
  args: InferRequestType<(typeof client.exports)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports[':id'].index.$patch(args, options))
}

export async function getFileUploadsIndex(
  args: InferRequestType<typeof client.file_uploads.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.file_uploads.index.$get(args, options))
}

export async function postFileUploadsIndex(
  args: InferRequestType<typeof client.file_uploads.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.file_uploads.index.$post(args, options))
}

export async function getFileUploadsIdIndex(
  args: InferRequestType<(typeof client.file_uploads)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.file_uploads[':id'].index.$get(args, options))
}

export async function getFormrulesIndex(
  args: InferRequestType<typeof client.formrules.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.formrules.index.$get(args, options))
}

export async function postFormrulesIndex(
  args: InferRequestType<typeof client.formrules.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.formrules.index.$post(args, options))
}

export async function getFormrulesIdIndex(
  args: InferRequestType<(typeof client.formrules)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.formrules[':id'].index.$get(args, options))
}

export async function putFormrulesIdIndex(
  args: InferRequestType<(typeof client.formrules)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.formrules[':id'].index.$put(args, options))
}

export async function deleteFormrulesIdIndex(
  args: InferRequestType<(typeof client.formrules)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.formrules[':id'].index.$delete(args, options))
}

export async function patchFormrulesIdIndex(
  args: InferRequestType<(typeof client.formrules)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.formrules[':id'].index.$patch(args, options))
}

export async function postIntegrationsIndex(
  args: InferRequestType<typeof client.integrations.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations.index.$post(args, options))
}

export async function getMetafieldsIndex(
  args: InferRequestType<typeof client.metafields.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metafields.index.$get(args, options))
}

export async function postMetafieldsIndex(
  args: InferRequestType<typeof client.metafields.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metafields.index.$post(args, options))
}

export async function getMetafieldsIdIndex(
  args: InferRequestType<(typeof client.metafields)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metafields[':id'].index.$get(args, options))
}

export async function putMetafieldsIdIndex(
  args: InferRequestType<(typeof client.metafields)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metafields[':id'].index.$put(args, options))
}

export async function deleteMetafieldsIdIndex(
  args: InferRequestType<(typeof client.metafields)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metafields[':id'].index.$delete(args, options))
}

export async function patchMetafieldsIdIndex(
  args: InferRequestType<(typeof client.metafields)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metafields[':id'].index.$patch(args, options))
}

export async function getNotificationTemplatesIndex(
  args: InferRequestType<typeof client.notification_templates.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_templates.index.$get(args, options))
}

export async function postNotificationTemplatesIndex(
  args: InferRequestType<typeof client.notification_templates.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_templates.index.$post(args, options))
}

export async function getNotificationTemplatesIdIndex(
  args: InferRequestType<(typeof client.notification_templates)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_templates[':id'].index.$get(args, options))
}

export async function putNotificationTemplatesIdIndex(
  args: InferRequestType<(typeof client.notification_templates)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_templates[':id'].index.$put(args, options))
}

export async function deleteNotificationTemplatesIdIndex(
  args: InferRequestType<(typeof client.notification_templates)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_templates[':id'].index.$delete(args, options))
}

export async function patchNotificationTemplatesIdIndex(
  args: InferRequestType<(typeof client.notification_templates)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_templates[':id'].index.$patch(args, options))
}

export async function postNotificationTemplatesIdRenderIndex(
  args: InferRequestType<(typeof client.notification_templates)[':id']['render']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notification_templates[':id'].render.index.$post(args, options))
}

export async function getNotificationsIndex(
  args: InferRequestType<typeof client.notifications.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.index.$get(args, options))
}

export async function postNotificationsIndex(
  args: InferRequestType<typeof client.notifications.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.index.$post(args, options))
}

export async function getNotificationsIdIndex(
  args: InferRequestType<(typeof client.notifications)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':id'].index.$get(args, options))
}

export async function getOrdersIndex(
  args: InferRequestType<typeof client.orders.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders.index.$get(args, options))
}

export async function postOrdersIndex(
  args: InferRequestType<typeof client.orders.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders.index.$post(args, options))
}

export async function getOrdersIdIndex(
  args: InferRequestType<(typeof client.orders)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':id'].index.$get(args, options))
}

export async function putOrdersIdIndex(
  args: InferRequestType<(typeof client.orders)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':id'].index.$put(args, options))
}

export async function patchOrdersIdIndex(
  args: InferRequestType<(typeof client.orders)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':id'].index.$patch(args, options))
}

export async function postPasswordChangeIndex(
  args: InferRequestType<typeof client.password_change.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.password_change.index.$post(args, options))
}

export async function postPasswordResetIndex(
  args: InferRequestType<typeof client.password_reset.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.password_reset.index.$post(args, options))
}

export async function postPasswordResetConfirmIndex(
  args: InferRequestType<typeof client.password_reset_confirm.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.password_reset_confirm.index.$post(args, options))
}

export async function getPushNotificationsIndex(
  args: InferRequestType<typeof client.push_notifications.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.push_notifications.index.$get(args, options))
}

export async function postPushNotificationsIndex(
  args: InferRequestType<typeof client.push_notifications.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.push_notifications.index.$post(args, options))
}

export async function getPushNotificationsIdIndex(
  args: InferRequestType<(typeof client.push_notifications)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.push_notifications[':id'].index.$get(args, options))
}

export async function putPushNotificationsIdIndex(
  args: InferRequestType<(typeof client.push_notifications)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.push_notifications[':id'].index.$put(args, options))
}

export async function deletePushNotificationsIdIndex(
  args: InferRequestType<(typeof client.push_notifications)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.push_notifications[':id'].index.$delete(args, options))
}

export async function patchPushNotificationsIdIndex(
  args: InferRequestType<(typeof client.push_notifications)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.push_notifications[':id'].index.$patch(args, options))
}

export async function postPushNotificationsIdResendIndex(
  args: InferRequestType<(typeof client.push_notifications)[':id']['resend']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.push_notifications[':id'].resend.index.$post(args, options))
}

export async function getRecurrencesIndex(
  args: InferRequestType<typeof client.recurrences.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recurrences.index.$get(args, options))
}

export async function postRecurrencesIndex(
  args: InferRequestType<typeof client.recurrences.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recurrences.index.$post(args, options))
}

export async function getRecurrencesIdIndex(
  args: InferRequestType<(typeof client.recurrences)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recurrences[':id'].index.$get(args, options))
}

export async function putRecurrencesIdIndex(
  args: InferRequestType<(typeof client.recurrences)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recurrences[':id'].index.$put(args, options))
}

export async function patchRecurrencesIdIndex(
  args: InferRequestType<(typeof client.recurrences)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recurrences[':id'].index.$patch(args, options))
}

export async function postRegisterIndex(
  args: InferRequestType<typeof client.register.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.register.index.$post(args, options))
}

export async function getReportsTasksStatesCountIndex(
  args: InferRequestType<typeof client.reports.tasks.states_count.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.tasks.states_count.index.$get(args, options))
}

export async function getReviewsIndex(
  args: InferRequestType<typeof client.reviews.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reviews.index.$get(args, options))
}

export async function postReviewsIndex(
  args: InferRequestType<typeof client.reviews.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reviews.index.$post(args, options))
}

export async function getReviewsIdIndex(
  args: InferRequestType<(typeof client.reviews)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reviews[':id'].index.$get(args, options))
}

export async function getRouteOptimizationsIndex(
  args: InferRequestType<typeof client.route_optimizations.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.route_optimizations.index.$get(args, options))
}

export async function postRouteOptimizationsIndex(
  args: InferRequestType<typeof client.route_optimizations.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.route_optimizations.index.$post(args, options))
}

export async function getRouteOptimizationsIdIndex(
  args: InferRequestType<(typeof client.route_optimizations)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.route_optimizations[':id'].index.$get(args, options))
}

export async function postRouteOptimizationsIdCommitIndex(
  args: InferRequestType<(typeof client.route_optimizations)[':id']['commit']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.route_optimizations[':id'].commit.index.$post(args, options))
}

export async function getRouteOptimizationsIdResultsIndex(
  args: InferRequestType<(typeof client.route_optimizations)[':id']['results']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.route_optimizations[':id'].results.index.$get(args, options))
}

export async function getRouteOptimizationsIdRoutesIndex(
  args: InferRequestType<(typeof client.route_optimizations)[':id']['routes']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.route_optimizations[':id'].routes.index.$get(args, options))
}

export async function postRouteOptimizationsIdRoutesIndex(
  args: InferRequestType<(typeof client.route_optimizations)[':id']['routes']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.route_optimizations[':id'].routes.index.$post(args, options))
}

export async function postRouteOptimizationsIdScheduleIndex(
  args: InferRequestType<(typeof client.route_optimizations)[':id']['schedule']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.route_optimizations[':id'].schedule.index.$post(args, options))
}

export async function getRoutesIndex(
  args: InferRequestType<typeof client.routes.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routes.index.$get(args, options))
}

export async function postRoutesIndex(
  args: InferRequestType<typeof client.routes.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routes.index.$post(args, options))
}

export async function getRoutesIdIndex(
  args: InferRequestType<(typeof client.routes)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routes[':id'].index.$get(args, options))
}

export async function putRoutesIdIndex(
  args: InferRequestType<(typeof client.routes)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routes[':id'].index.$put(args, options))
}

export async function deleteRoutesIdIndex(
  args: InferRequestType<(typeof client.routes)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routes[':id'].index.$delete(args, options))
}

export async function patchRoutesIdIndex(
  args: InferRequestType<(typeof client.routes)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routes[':id'].index.$patch(args, options))
}

export async function getScenesDashboardIndex(
  args: InferRequestType<typeof client.scenes.dashboard.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scenes.dashboard.index.$get(args, options))
}

export async function getScenesOrderListIndex(
  args: InferRequestType<typeof client.scenes.order_list.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scenes.order_list.index.$get(args, options))
}

export async function getScenesRecurrenceListIndex(
  args: InferRequestType<typeof client.scenes.recurrence_list.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scenes.recurrence_list.index.$get(args, options))
}

export async function getScenesTaskListIndex(
  args: InferRequestType<typeof client.scenes.task_list.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scenes.task_list.index.$get(args, options))
}

export async function getSignaturesIndex(
  args: InferRequestType<typeof client.signatures.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.signatures.index.$get(args, options))
}

export async function postSignaturesIndex(
  args: InferRequestType<typeof client.signatures.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.signatures.index.$post(args, options))
}

export async function postSignaturesBatchDeleteIndex(
  args: InferRequestType<typeof client.signatures.batch_delete.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.signatures.batch_delete.index.$post(args, options))
}

export async function getSignaturesIdIndex(
  args: InferRequestType<(typeof client.signatures)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.signatures[':id'].index.$get(args, options))
}

export async function deleteSignaturesIdIndex(
  args: InferRequestType<(typeof client.signatures)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.signatures[':id'].index.$delete(args, options))
}

export async function getSmsIndex(
  args: InferRequestType<typeof client.sms.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms.index.$get(args, options))
}

export async function postSmsIndex(
  args: InferRequestType<typeof client.sms.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms.index.$post(args, options))
}

export async function getSmsIdIndex(
  args: InferRequestType<(typeof client.sms)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms[':id'].index.$get(args, options))
}

export async function putSmsIdIndex(
  args: InferRequestType<(typeof client.sms)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms[':id'].index.$put(args, options))
}

export async function deleteSmsIdIndex(
  args: InferRequestType<(typeof client.sms)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms[':id'].index.$delete(args, options))
}

export async function patchSmsIdIndex(
  args: InferRequestType<(typeof client.sms)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms[':id'].index.$patch(args, options))
}

export async function postSmsIdResendIndex(
  args: InferRequestType<(typeof client.sms)[':id']['resend']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms[':id'].resend.index.$post(args, options))
}

export async function getTaskAddressFeaturesIndex(
  args: InferRequestType<typeof client.task_address_features.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_address_features.index.$get(args, options))
}

export async function getTaskAddressFeaturesIdIndex(
  args: InferRequestType<(typeof client.task_address_features)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_address_features[':id'].index.$get(args, options))
}

export async function getTaskCommandsIndex(
  args: InferRequestType<typeof client.task_commands.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_commands.index.$get(args, options))
}

export async function postTaskCommandsIndex(
  args: InferRequestType<typeof client.task_commands.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_commands.index.$post(args, options))
}

export async function getTaskCommandsIdIndex(
  args: InferRequestType<(typeof client.task_commands)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_commands[':id'].index.$get(args, options))
}

export async function putTaskCommandsIdIndex(
  args: InferRequestType<(typeof client.task_commands)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_commands[':id'].index.$put(args, options))
}

export async function getTaskEventTracksIndex(
  args: InferRequestType<typeof client.task_event_tracks.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_event_tracks.index.$get(args, options))
}

export async function getTaskEventTracksIdIndex(
  args: InferRequestType<(typeof client.task_event_tracks)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_event_tracks[':id'].index.$get(args, options))
}

export async function getTaskEventsIndex(
  args: InferRequestType<typeof client.task_events.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_events.index.$get(args, options))
}

export async function getTaskEventsIdIndex(
  args: InferRequestType<(typeof client.task_events)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_events[':id'].index.$get(args, options))
}

export async function getTaskExportsIndex(
  args: InferRequestType<typeof client.task_exports.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_exports.index.$get(args, options))
}

export async function getTaskFormsIndex(
  args: InferRequestType<typeof client.task_forms.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_forms.index.$get(args, options))
}

export async function postTaskFormsIndex(
  args: InferRequestType<typeof client.task_forms.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_forms.index.$post(args, options))
}

export async function getTaskFormsIdIndex(
  args: InferRequestType<(typeof client.task_forms)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_forms[':id'].index.$get(args, options))
}

export async function putTaskFormsIdIndex(
  args: InferRequestType<(typeof client.task_forms)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_forms[':id'].index.$put(args, options))
}

export async function deleteTaskFormsIdIndex(
  args: InferRequestType<(typeof client.task_forms)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_forms[':id'].index.$delete(args, options))
}

export async function patchTaskFormsIdIndex(
  args: InferRequestType<(typeof client.task_forms)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_forms[':id'].index.$patch(args, options))
}

export async function getTaskImportIndex(
  args: InferRequestType<typeof client.task_import.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_import.index.$get(args, options))
}

export async function postTaskImportIndex(
  args: InferRequestType<typeof client.task_import.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_import.index.$post(args, options))
}

export async function getTaskImportIdIndex(
  args: InferRequestType<(typeof client.task_import)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_import[':id'].index.$get(args, options))
}

export async function getTaskImportMappingIndex(
  args: InferRequestType<typeof client.task_import_mapping.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_import_mapping.index.$get(args, options))
}

export async function postTaskImportMappingIndex(
  args: InferRequestType<typeof client.task_import_mapping.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_import_mapping.index.$post(args, options))
}

export async function getTaskImportMappingIdIndex(
  args: InferRequestType<(typeof client.task_import_mapping)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_import_mapping[':id'].index.$get(args, options))
}

export async function getTaskMetadatasIndex(
  args: InferRequestType<typeof client.task_metadatas.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_metadatas.index.$get(args, options))
}

export async function getTaskMetadatasIdIndex(
  args: InferRequestType<(typeof client.task_metadatas)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_metadatas[':id'].index.$get(args, options))
}

export async function getTasksIndex(
  args: InferRequestType<typeof client.tasks.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.index.$get(args, options))
}

export async function postTasksIndex(
  args: InferRequestType<typeof client.tasks.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.index.$post(args, options))
}

export async function postTasksReorderIndex(
  args: InferRequestType<typeof client.tasks.reorder.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.reorder.index.$post(args, options))
}

export async function postTasksRepositionIndex(
  args: InferRequestType<typeof client.tasks.reposition.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.reposition.index.$post(args, options))
}

export async function getTasksIdIndex(
  args: InferRequestType<(typeof client.tasks)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':id'].index.$get(args, options))
}

export async function putTasksIdIndex(
  args: InferRequestType<(typeof client.tasks)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':id'].index.$put(args, options))
}

export async function patchTasksIdIndex(
  args: InferRequestType<(typeof client.tasks)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':id'].index.$patch(args, options))
}

export async function postTasksIdAcceptIndex(
  args: InferRequestType<(typeof client.tasks)[':id']['accept']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':id'].accept.index.$post(args, options))
}

export async function postTasksIdAccountChangeIndex(
  args: InferRequestType<(typeof client.tasks)[':id']['account_change']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':id'].account_change.index.$post(args, options))
}

export async function postTasksIdActivateIndex(
  args: InferRequestType<(typeof client.tasks)[':id']['activate']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':id'].activate.index.$post(args, options))
}

export async function postTasksIdAssignIndex(
  args: InferRequestType<(typeof client.tasks)[':id']['assign']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':id'].assign.index.$post(args, options))
}

export async function postTasksIdCancelIndex(
  args: InferRequestType<(typeof client.tasks)[':id']['cancel']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':id'].cancel.index.$post(args, options))
}

export async function postTasksIdCompleteIndex(
  args: InferRequestType<(typeof client.tasks)[':id']['complete']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':id'].complete.index.$post(args, options))
}

export async function getTasksIdDocumentsIndex(
  args: InferRequestType<(typeof client.tasks)[':id']['documents']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':id'].documents.index.$get(args, options))
}

export async function getTasksIdEventsIndex(
  args: InferRequestType<(typeof client.tasks)[':id']['events']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':id'].events.index.$get(args, options))
}

export async function postTasksIdFailIndex(
  args: InferRequestType<(typeof client.tasks)[':id']['fail']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':id'].fail.index.$post(args, options))
}

export async function postTasksIdRejectIndex(
  args: InferRequestType<(typeof client.tasks)[':id']['reject']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':id'].reject.index.$post(args, options))
}

export async function getTasksIdSignaturesIndex(
  args: InferRequestType<(typeof client.tasks)[':id']['signatures']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':id'].signatures.index.$get(args, options))
}

export async function postTasksIdTransitIndex(
  args: InferRequestType<(typeof client.tasks)[':id']['transit']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':id'].transit.index.$post(args, options))
}

export async function postTasksIdUnacceptIndex(
  args: InferRequestType<(typeof client.tasks)[':id']['unaccept']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':id'].unaccept.index.$post(args, options))
}

export async function postTasksIdUnassignIndex(
  args: InferRequestType<(typeof client.tasks)[':id']['unassign']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':id'].unassign.index.$post(args, options))
}

export async function getTimeLocationFeaturesIndex(
  args: InferRequestType<typeof client.time_location_features.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.time_location_features.index.$get(args, options))
}

export async function postTimeLocationFeaturesIndex(
  args: InferRequestType<typeof client.time_location_features.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.time_location_features.index.$post(args, options))
}

export async function getTimeLocationFeaturesIdIndex(
  args: InferRequestType<(typeof client.time_location_features)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.time_location_features[':id'].index.$get(args, options))
}

export async function putTimeLocationFeaturesIdIndex(
  args: InferRequestType<(typeof client.time_location_features)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.time_location_features[':id'].index.$put(args, options))
}

export async function deleteTimeLocationFeaturesIdIndex(
  args: InferRequestType<(typeof client.time_location_features)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.time_location_features[':id'].index.$delete(args, options))
}

export async function patchTimeLocationFeaturesIdIndex(
  args: InferRequestType<(typeof client.time_location_features)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.time_location_features[':id'].index.$patch(args, options))
}

export async function getTimeLocationsIndex(
  args: InferRequestType<typeof client.time_locations.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.time_locations.index.$get(args, options))
}

export async function postTimeLocationsIndex(
  args: InferRequestType<typeof client.time_locations.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.time_locations.index.$post(args, options))
}

export async function getTimeLocationsIdIndex(
  args: InferRequestType<(typeof client.time_locations)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.time_locations[':id'].index.$get(args, options))
}

export async function getTrackersIndex(
  args: InferRequestType<typeof client.trackers.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.trackers.index.$get(args, options))
}

export async function postTrackersIndex(
  args: InferRequestType<typeof client.trackers.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.trackers.index.$post(args, options))
}

export async function getTrackersIdIndex(
  args: InferRequestType<(typeof client.trackers)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.trackers[':id'].index.$get(args, options))
}

export async function putTrackersIdIndex(
  args: InferRequestType<(typeof client.trackers)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.trackers[':id'].index.$put(args, options))
}

export async function patchTrackersIdIndex(
  args: InferRequestType<(typeof client.trackers)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.trackers[':id'].index.$patch(args, options))
}

export async function getTrackersIdPublicIndex(
  args: InferRequestType<(typeof client.trackers)[':id']['public']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.trackers[':id'].public.index.$get(args, options))
}

export async function getUsersIndex(
  args: InferRequestType<typeof client.users.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.index.$get(args, options))
}

export async function postUsersIndex(
  args: InferRequestType<typeof client.users.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.index.$post(args, options))
}

export async function getUsersIdIndex(
  args: InferRequestType<(typeof client.users)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].index.$get(args, options))
}

export async function putUsersIdIndex(
  args: InferRequestType<(typeof client.users)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].index.$put(args, options))
}

export async function deleteUsersIdIndex(
  args: InferRequestType<(typeof client.users)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].index.$delete(args, options))
}

export async function patchUsersIdIndex(
  args: InferRequestType<(typeof client.users)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].index.$patch(args, options))
}

export async function postUsersIdActivateIndex(
  args: InferRequestType<(typeof client.users)[':id']['activate']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].activate.index.$post(args, options))
}

export async function getUsersIdOnDutyIndex(
  args: InferRequestType<(typeof client.users)[':id']['on_duty']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].on_duty.index.$get(args, options))
}

export async function putUsersIdOnDutyIndex(
  args: InferRequestType<(typeof client.users)[':id']['on_duty']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].on_duty.index.$put(args, options))
}

export async function deleteUsersIdOnDutyIndex(
  args: InferRequestType<(typeof client.users)[':id']['on_duty']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].on_duty.index.$delete(args, options))
}

export async function getUsersOnDutyLogIndex(
  args: InferRequestType<typeof client.users_on_duty_log.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users_on_duty_log.index.$get(args, options))
}

export async function postUsersOnDutyLogIndex(
  args: InferRequestType<typeof client.users_on_duty_log.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users_on_duty_log.index.$post(args, options))
}

export async function getUsersOnDutyLogIdIndex(
  args: InferRequestType<(typeof client.users_on_duty_log)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users_on_duty_log[':id'].index.$get(args, options))
}

export async function getWebhooksIndex(
  args: InferRequestType<typeof client.webhooks.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.index.$get(args, options))
}

export async function postWebhooksIndex(
  args: InferRequestType<typeof client.webhooks.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.index.$post(args, options))
}

export async function getWebhooksIdIndex(
  args: InferRequestType<(typeof client.webhooks)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id'].index.$get(args, options))
}

export async function putWebhooksIdIndex(
  args: InferRequestType<(typeof client.webhooks)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id'].index.$put(args, options))
}

export async function deleteWebhooksIdIndex(
  args: InferRequestType<(typeof client.webhooks)[':id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id'].index.$delete(args, options))
}

export async function patchWebhooksIdIndex(
  args: InferRequestType<(typeof client.webhooks)[':id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id'].index.$patch(args, options))
}

export async function postWebhooksIdActiveIndex(
  args: InferRequestType<(typeof client.webhooks)[':id']['active']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id'].active.index.$post(args, options))
}

export async function postWebhooksIdInactiveIndex(
  args: InferRequestType<(typeof client.webhooks)[':id']['inactive']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id'].inactive.index.$post(args, options))
}

export async function getWorkerFeaturesIndex(
  args: InferRequestType<typeof client.worker_features.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.worker_features.index.$get(args, options))
}

export async function getWorkerFeaturesUserIdIndex(
  args: InferRequestType<(typeof client.worker_features)[':user_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.worker_features[':user_id'].index.$get(args, options))
}

export async function getWorkerTracksIndex(
  args: InferRequestType<typeof client.worker_tracks.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.worker_tracks.index.$get(args, options))
}

export async function getWorkingStateIndex(
  args: InferRequestType<typeof client.working_state.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.working_state.index.$get(args, options))
}

export async function postWorkingStateIndex(
  args: InferRequestType<typeof client.working_state.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.working_state.index.$post(args, options))
}

export async function getWorkingStateIdIndex(
  args: InferRequestType<(typeof client.working_state)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.working_state[':id'].index.$get(args, options))
}
