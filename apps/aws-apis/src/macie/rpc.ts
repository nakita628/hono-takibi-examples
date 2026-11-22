import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetMacieServiceAssociateMemberAccount(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=MacieService.AssociateMemberAccount']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=MacieService.AssociateMemberAccount'].$post(args, options),
  )
}

export async function postXAmzTargetMacieServiceAssociateS3Resources(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=MacieService.AssociateS3Resources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=MacieService.AssociateS3Resources'].$post(args, options),
  )
}

export async function postXAmzTargetMacieServiceDisassociateMemberAccount(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=MacieService.DisassociateMemberAccount']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=MacieService.DisassociateMemberAccount'].$post(args, options),
  )
}

export async function postXAmzTargetMacieServiceDisassociateS3Resources(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=MacieService.DisassociateS3Resources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=MacieService.DisassociateS3Resources'].$post(args, options),
  )
}

export async function postXAmzTargetMacieServiceListMemberAccounts(
  args: InferRequestType<(typeof client)['#X-Amz-Target=MacieService.ListMemberAccounts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=MacieService.ListMemberAccounts'].$post(args, options),
  )
}

export async function postXAmzTargetMacieServiceListS3Resources(
  args: InferRequestType<(typeof client)['#X-Amz-Target=MacieService.ListS3Resources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=MacieService.ListS3Resources'].$post(args, options),
  )
}

export async function postXAmzTargetMacieServiceUpdateS3Resources(
  args: InferRequestType<(typeof client)['#X-Amz-Target=MacieService.UpdateS3Resources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=MacieService.UpdateS3Resources'].$post(args, options),
  )
}
