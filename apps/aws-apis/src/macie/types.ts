type AssociateMemberAccountRequest = { memberAccountId: {} }
type AssociateS3ResourcesRequest = { memberAccountId?: {} | undefined; s3Resources: {} }
type AssociateS3ResourcesResult = { failedS3Resources?: {} | undefined }
type DisassociateMemberAccountRequest = { memberAccountId: {} }
type DisassociateS3ResourcesRequest = {
  memberAccountId?: {} | undefined
  associatedS3Resources: {}
}
type DisassociateS3ResourcesResult = { failedS3Resources?: {} | undefined }
type ListMemberAccountsRequest = { nextToken?: {} | undefined; maxResults?: {} | undefined }
type ListMemberAccountsResult = { memberAccounts?: {} | undefined; nextToken?: {} | undefined }
type ListS3ResourcesRequest = {
  memberAccountId?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListS3ResourcesResult = { s3Resources?: {} | undefined; nextToken?: {} | undefined }
type UpdateS3ResourcesRequest = { memberAccountId?: {} | undefined; s3ResourcesUpdate: {} }
type UpdateS3ResourcesResult = { failedS3Resources?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=MacieService.AssociateMemberAccount': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MacieService.AssociateMemberAccount'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateMemberAccountRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MacieService.AssociateS3Resources': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MacieService.AssociateS3Resources'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateS3ResourcesRequest }
        output: AssociateS3ResourcesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MacieService.DisassociateMemberAccount': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MacieService.DisassociateMemberAccount'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateMemberAccountRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MacieService.DisassociateS3Resources': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MacieService.DisassociateS3Resources'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateS3ResourcesRequest }
        output: DisassociateS3ResourcesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MacieService.ListMemberAccounts': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'MacieService.ListMemberAccounts'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListMemberAccountsRequest }
        output: ListMemberAccountsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MacieService.ListS3Resources': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'MacieService.ListS3Resources'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListS3ResourcesRequest }
        output: ListS3ResourcesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=MacieService.UpdateS3Resources': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'MacieService.UpdateS3Resources'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateS3ResourcesRequest }
        output: UpdateS3ResourcesResult
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
