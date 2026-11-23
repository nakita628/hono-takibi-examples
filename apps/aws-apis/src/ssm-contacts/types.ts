type AcceptPageRequest = {
  PageId: {}
  ContactChannelId?: {} | undefined
  AcceptType: {}
  Note?: {} | undefined
  AcceptCode: {}
  AcceptCodeValidation?: {} | undefined
}
type AcceptPageResult = { [x: string]: unknown }
type ActivateContactChannelRequest = { ContactChannelId: {}; ActivationCode: {} }
type ActivateContactChannelResult = { [x: string]: unknown }
type CreateContactRequest = {
  Alias: {}
  DisplayName?: {} | undefined
  Type: {}
  Plan: { Stages?: {} | undefined; RotationIds?: {} | undefined }
  Tags?: {} | undefined
  IdempotencyToken?: {} | undefined
}
type CreateContactResult = { ContactArn: {} }
type CreateContactChannelRequest = {
  ContactId: {}
  Name: {}
  Type: {}
  DeliveryAddress: { SimpleAddress?: {} | undefined }
  DeferActivation?: {} | undefined
  IdempotencyToken?: {} | undefined
}
type CreateContactChannelResult = { ContactChannelArn: {} }
type CreateRotationRequest = {
  Name: {}
  ContactIds: {}
  StartTime?: {} | undefined
  TimeZoneId: {}
  Recurrence: {
    MonthlySettings?: {} | undefined
    WeeklySettings?: {} | undefined
    DailySettings?: {} | undefined
    NumberOfOnCalls: {}
    ShiftCoverages?: {} | undefined
    RecurrenceMultiplier: {}
  }
  Tags?: {} | undefined
  IdempotencyToken?: {} | undefined
}
type CreateRotationResult = { RotationArn: {} }
type CreateRotationOverrideRequest = {
  RotationId: {}
  NewContactIds: {}
  StartTime: {}
  EndTime: {}
  IdempotencyToken?: {} | undefined
}
type CreateRotationOverrideResult = { RotationOverrideId: {} }
type DeactivateContactChannelRequest = { ContactChannelId: {} }
type DeactivateContactChannelResult = { [x: string]: unknown }
type DeleteContactRequest = { ContactId: {} }
type DeleteContactResult = { [x: string]: unknown }
type DeleteContactChannelRequest = { ContactChannelId: {} }
type DeleteContactChannelResult = { [x: string]: unknown }
type DeleteRotationRequest = { RotationId: {} }
type DeleteRotationResult = { [x: string]: unknown }
type DeleteRotationOverrideRequest = { RotationId: {}; RotationOverrideId: {} }
type DeleteRotationOverrideResult = { [x: string]: unknown }
type DescribeEngagementRequest = { EngagementId: {} }
type DescribeEngagementResult = {
  ContactArn: {}
  EngagementArn: {}
  Sender: {}
  Subject: {}
  Content: {}
  PublicSubject?: {} | undefined
  PublicContent?: {} | undefined
  IncidentId?: {} | undefined
  StartTime?: {} | undefined
  StopTime?: {} | undefined
}
type DescribePageRequest = { PageId: {} }
type DescribePageResult = {
  PageArn: {}
  EngagementArn: {}
  ContactArn: {}
  Sender: {}
  Subject: {}
  Content: {}
  PublicSubject?: {} | undefined
  PublicContent?: {} | undefined
  IncidentId?: {} | undefined
  SentTime?: {} | undefined
  ReadTime?: {} | undefined
  DeliveryTime?: {} | undefined
}
type GetContactRequest = { ContactId: {} }
type GetContactResult = {
  ContactArn: {}
  Alias: {}
  DisplayName?: {} | undefined
  Type: {}
  Plan: { Stages?: {} | undefined; RotationIds?: {} | undefined }
}
type GetContactChannelRequest = { ContactChannelId: {} }
type GetContactChannelResult = {
  ContactArn: {}
  ContactChannelArn: {}
  Name: {}
  Type: {}
  DeliveryAddress: { SimpleAddress?: {} | undefined }
  ActivationStatus?: {} | undefined
}
type GetContactPolicyRequest = { ContactArn: {} }
type GetContactPolicyResult = { ContactArn?: {} | undefined; Policy?: {} | undefined }
type GetRotationRequest = { RotationId: {} }
type GetRotationResult = {
  RotationArn: {}
  Name: {}
  ContactIds: {}
  StartTime: {}
  TimeZoneId: {}
  Recurrence: {
    MonthlySettings?: {} | undefined
    WeeklySettings?: {} | undefined
    DailySettings?: {} | undefined
    NumberOfOnCalls: {}
    ShiftCoverages?: {} | undefined
    RecurrenceMultiplier: {}
  }
}
type GetRotationOverrideRequest = { RotationId: {}; RotationOverrideId: {} }
type GetRotationOverrideResult = {
  RotationOverrideId?: {} | undefined
  RotationArn?: {} | undefined
  NewContactIds?: {} | undefined
  StartTime?: {} | undefined
  EndTime?: {} | undefined
  CreateTime?: {} | undefined
}
type ListContactChannelsRequest = {
  ContactId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListContactChannelsResult = { NextToken?: {} | undefined; ContactChannels: {} }
type ListContactsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  AliasPrefix?: {} | undefined
  Type?: {} | undefined
}
type ListContactsResult = { NextToken?: {} | undefined; Contacts?: {} | undefined }
type ListEngagementsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  IncidentId?: {} | undefined
  TimeRangeValue?: { StartTime?: {} | undefined; EndTime?: {} | undefined } | undefined
}
type ListEngagementsResult = { NextToken?: {} | undefined; Engagements: {} }
type ListPageReceiptsRequest = {
  PageId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListPageReceiptsResult = { NextToken?: {} | undefined; Receipts?: {} | undefined }
type ListPageResolutionsRequest = { NextToken?: {} | undefined; PageId: {} }
type ListPageResolutionsResult = { NextToken?: {} | undefined; PageResolutions: {} }
type ListPagesByContactRequest = {
  ContactId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListPagesByContactResult = { NextToken?: {} | undefined; Pages: {} }
type ListPagesByEngagementRequest = {
  EngagementId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListPagesByEngagementResult = { NextToken?: {} | undefined; Pages: {} }
type ListPreviewRotationShiftsRequest = {
  RotationStartTime?: {} | undefined
  StartTime?: {} | undefined
  EndTime: {}
  Members: {}
  TimeZoneId: {}
  Recurrence: {
    MonthlySettings?: {} | undefined
    WeeklySettings?: {} | undefined
    DailySettings?: {} | undefined
    NumberOfOnCalls: {}
    ShiftCoverages?: {} | undefined
    RecurrenceMultiplier: {}
  }
  Overrides?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListPreviewRotationShiftsResult = {
  RotationShifts?: {} | undefined
  NextToken?: {} | undefined
}
type ListRotationOverridesRequest = {
  RotationId: {}
  StartTime: {}
  EndTime: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListRotationOverridesResult = {
  RotationOverrides?: {} | undefined
  NextToken?: {} | undefined
}
type ListRotationShiftsRequest = {
  RotationId: {}
  StartTime?: {} | undefined
  EndTime: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListRotationShiftsResult = { RotationShifts?: {} | undefined; NextToken?: {} | undefined }
type ListRotationsRequest = {
  RotationNamePrefix?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListRotationsResult = { NextToken?: {} | undefined; Rotations: {} }
type ListTagsForResourceRequest = { ResourceARN: {} }
type ListTagsForResourceResult = { Tags?: {} | undefined }
type PutContactPolicyRequest = { ContactArn: {}; Policy: {} }
type PutContactPolicyResult = { [x: string]: unknown }
type SendActivationCodeRequest = { ContactChannelId: {} }
type SendActivationCodeResult = { [x: string]: unknown }
type StartEngagementRequest = {
  ContactId: {}
  Sender: {}
  Subject: {}
  Content: {}
  PublicSubject?: {} | undefined
  PublicContent?: {} | undefined
  IncidentId?: {} | undefined
  IdempotencyToken?: {} | undefined
}
type StartEngagementResult = { EngagementArn: {} }
type StopEngagementRequest = { EngagementId: {}; Reason?: {} | undefined }
type StopEngagementResult = { [x: string]: unknown }
type TagResourceRequest = { ResourceARN: {}; Tags: {} }
type TagResourceResult = { [x: string]: unknown }
type UntagResourceRequest = { ResourceARN: {}; TagKeys: {} }
type UntagResourceResult = { [x: string]: unknown }
type UpdateContactRequest = {
  ContactId: {}
  DisplayName?: {} | undefined
  Plan?: { Stages?: {} | undefined; RotationIds?: {} | undefined } | undefined
}
type UpdateContactResult = { [x: string]: unknown }
type UpdateContactChannelRequest = {
  ContactChannelId: {}
  Name?: {} | undefined
  DeliveryAddress?: { SimpleAddress?: {} | undefined } | undefined
}
type UpdateContactChannelResult = { [x: string]: unknown }
type UpdateRotationRequest = {
  RotationId: {}
  ContactIds?: {} | undefined
  StartTime?: {} | undefined
  TimeZoneId?: {} | undefined
  Recurrence: {
    MonthlySettings?: {} | undefined
    WeeklySettings?: {} | undefined
    DailySettings?: {} | undefined
    NumberOfOnCalls: {}
    ShiftCoverages?: {} | undefined
    RecurrenceMultiplier: {}
  }
}
type UpdateRotationResult = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=SSMContacts.AcceptPage': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SSMContacts.AcceptPage'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AcceptPageRequest }
        output: AcceptPageResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.ActivateContactChannel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SSMContacts.ActivateContactChannel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ActivateContactChannelRequest }
        output: ActivateContactChannelResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.CreateContact': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SSMContacts.CreateContact'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateContactRequest }
        output: CreateContactResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.CreateContactChannel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SSMContacts.CreateContactChannel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateContactChannelRequest }
        output: CreateContactChannelResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.CreateRotation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SSMContacts.CreateRotation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateRotationRequest }
        output: CreateRotationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.CreateRotationOverride': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SSMContacts.CreateRotationOverride'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateRotationOverrideRequest }
        output: CreateRotationOverrideResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.DeactivateContactChannel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SSMContacts.DeactivateContactChannel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeactivateContactChannelRequest }
        output: DeactivateContactChannelResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.DeleteContact': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SSMContacts.DeleteContact'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteContactRequest }
        output: DeleteContactResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.DeleteContactChannel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SSMContacts.DeleteContactChannel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteContactChannelRequest }
        output: DeleteContactChannelResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.DeleteRotation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SSMContacts.DeleteRotation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteRotationRequest }
        output: DeleteRotationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.DeleteRotationOverride': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SSMContacts.DeleteRotationOverride'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteRotationOverrideRequest }
        output: DeleteRotationOverrideResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.DescribeEngagement': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SSMContacts.DescribeEngagement'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEngagementRequest }
        output: DescribeEngagementResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.DescribePage': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SSMContacts.DescribePage'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribePageRequest }
        output: DescribePageResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.GetContact': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SSMContacts.GetContact'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetContactRequest }
        output: GetContactResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.GetContactChannel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SSMContacts.GetContactChannel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetContactChannelRequest }
        output: GetContactChannelResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.GetContactPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SSMContacts.GetContactPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetContactPolicyRequest }
        output: GetContactPolicyResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.GetRotation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SSMContacts.GetRotation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRotationRequest }
        output: GetRotationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.GetRotationOverride': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SSMContacts.GetRotationOverride'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRotationOverrideRequest }
        output: GetRotationOverrideResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.ListContactChannels': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SSMContacts.ListContactChannels'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListContactChannelsRequest }
        output: ListContactChannelsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.ListContacts': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SSMContacts.ListContacts'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListContactsRequest }
        output: ListContactsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.ListEngagements': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SSMContacts.ListEngagements'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListEngagementsRequest }
        output: ListEngagementsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.ListPageReceipts': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SSMContacts.ListPageReceipts'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListPageReceiptsRequest }
        output: ListPageReceiptsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.ListPageResolutions': {
      $post: {
        input: { query: { NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SSMContacts.ListPageResolutions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListPageResolutionsRequest }
        output: ListPageResolutionsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.ListPagesByContact': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SSMContacts.ListPagesByContact'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListPagesByContactRequest }
        output: ListPagesByContactResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.ListPagesByEngagement': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SSMContacts.ListPagesByEngagement'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListPagesByEngagementRequest }
        output: ListPagesByEngagementResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.ListPreviewRotationShifts': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SSMContacts.ListPreviewRotationShifts'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListPreviewRotationShiftsRequest }
        output: ListPreviewRotationShiftsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.ListRotationOverrides': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SSMContacts.ListRotationOverrides'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListRotationOverridesRequest }
        output: ListRotationOverridesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.ListRotationShifts': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SSMContacts.ListRotationShifts'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListRotationShiftsRequest }
        output: ListRotationShiftsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.ListRotations': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SSMContacts.ListRotations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListRotationsRequest }
        output: ListRotationsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SSMContacts.ListTagsForResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsForResourceRequest }
        output: ListTagsForResourceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.PutContactPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SSMContacts.PutContactPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutContactPolicyRequest }
        output: PutContactPolicyResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.SendActivationCode': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SSMContacts.SendActivationCode'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SendActivationCodeRequest }
        output: SendActivationCodeResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.StartEngagement': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SSMContacts.StartEngagement'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartEngagementRequest }
        output: StartEngagementResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.StopEngagement': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SSMContacts.StopEngagement'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopEngagementRequest }
        output: StopEngagementResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SSMContacts.TagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagResourceRequest }
        output: TagResourceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SSMContacts.UntagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagResourceRequest }
        output: UntagResourceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.UpdateContact': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SSMContacts.UpdateContact'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateContactRequest }
        output: UpdateContactResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.UpdateContactChannel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SSMContacts.UpdateContactChannel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateContactChannelRequest }
        output: UpdateContactChannelResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SSMContacts.UpdateRotation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SSMContacts.UpdateRotation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateRotationRequest }
        output: UpdateRotationResult
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
