type Groups = {
  allowExternalMembers?: string | undefined
  allowGoogleCommunication?: string | undefined
  allowWebPosting?: string | undefined
  archiveOnly?: string | undefined
  customFooterText?: string | undefined
  customReplyTo?: string | undefined
  customRolesEnabledForSettingsToBeMerged?: string | undefined
  defaultMessageDenyNotificationText?: string | undefined
  default_sender?: string | undefined
  description?: string | undefined
  email?: string | undefined
  enableCollaborativeInbox?: string | undefined
  favoriteRepliesOnTop?: string | undefined
  includeCustomFooter?: string | undefined
  includeInGlobalAddressList?: string | undefined
  isArchived?: string | undefined
  kind?: string | undefined
  maxMessageBytes?: number | undefined
  membersCanPostAsTheGroup?: string | undefined
  messageDisplayFont?: string | undefined
  messageModerationLevel?: string | undefined
  name?: string | undefined
  primaryLanguage?: string | undefined
  replyTo?: string | undefined
  sendMessageDenyNotification?: string | undefined
  showInGroupDirectory?: string | undefined
  spamModerationLevel?: string | undefined
  whoCanAdd?: string | undefined
  whoCanAddReferences?: string | undefined
  whoCanApproveMembers?: string | undefined
  whoCanApproveMessages?: string | undefined
  whoCanAssignTopics?: string | undefined
  whoCanAssistContent?: string | undefined
  whoCanBanUsers?: string | undefined
  whoCanContactOwner?: string | undefined
  whoCanDeleteAnyPost?: string | undefined
  whoCanDeleteTopics?: string | undefined
  whoCanDiscoverGroup?: string | undefined
  whoCanEnterFreeFormTags?: string | undefined
  whoCanHideAbuse?: string | undefined
  whoCanInvite?: string | undefined
  whoCanJoin?: string | undefined
  whoCanLeaveGroup?: string | undefined
  whoCanLockTopics?: string | undefined
  whoCanMakeTopicsSticky?: string | undefined
  whoCanMarkDuplicate?: string | undefined
  whoCanMarkFavoriteReplyOnAnyTopic?: string | undefined
  whoCanMarkFavoriteReplyOnOwnTopic?: string | undefined
  whoCanMarkNoResponseNeeded?: string | undefined
  whoCanModerateContent?: string | undefined
  whoCanModerateMembers?: string | undefined
  whoCanModifyMembers?: string | undefined
  whoCanModifyTagsAndCategories?: string | undefined
  whoCanMoveTopicsIn?: string | undefined
  whoCanMoveTopicsOut?: string | undefined
  whoCanPostAnnouncements?: string | undefined
  whoCanPostMessage?: string | undefined
  whoCanTakeTopics?: string | undefined
  whoCanUnassignTopic?: string | undefined
  whoCanUnmarkFavoriteReplyOnAnyTopic?: string | undefined
  whoCanViewGroup?: string | undefined
  whoCanViewMembership?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:groupUniqueId': {
      $get: {
        input: { param: { groupUniqueId: string } } & {
          query: {
            alt?: 'atom' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Groups
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { groupUniqueId: string } } & {
          query: {
            alt?: 'atom' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Groups }
        output: Groups
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { groupUniqueId: string } } & {
          query: {
            alt?: 'atom' | 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Groups }
        output: Groups
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
