type AssociatePhoneNumberWithUserResponse = { [x: string]: unknown }
type E164PhoneNumber = string
type AssociatePhoneNumbersWithVoiceConnectorResponse = { PhoneNumberErrors?: {} | undefined }
type AssociatePhoneNumbersWithVoiceConnectorGroupResponse = { PhoneNumberErrors?: {} | undefined }
type SigninDelegateGroup = { GroupName?: {} | undefined }
type AssociateSigninDelegateGroupsWithAccountResponse = { [x: string]: unknown }
type CreateAttendeeRequestItem = { ExternalUserId: {}; Tags?: {} | undefined }
type BatchCreateAttendeeResponse = { Attendees?: {} | undefined; Errors?: {} | undefined }
type ChimeArn = string
type BatchCreateChannelMembershipResponse = {
  BatchChannelMemberships?:
    | {
        InvitedBy?: { Arn?: {} | undefined; Name?: {} | undefined } | undefined
        Type?: {} | undefined
        Members?: {} | undefined
        ChannelArn?: {} | undefined
      }
    | undefined
  Errors?: {} | undefined
}
type MembershipItem = { MemberId?: {} | undefined; Role?: {} | undefined }
type BatchCreateRoomMembershipResponse = { Errors?: {} | undefined }
type String = string
type BatchDeletePhoneNumberResponse = { PhoneNumberErrors?: {} | undefined }
type NonEmptyString = string
type BatchSuspendUserResponse = { UserErrors?: {} | undefined }
type BatchUnsuspendUserResponse = { UserErrors?: {} | undefined }
type UpdatePhoneNumberRequestItem = {
  PhoneNumberId: {}
  ProductType?: {} | undefined
  CallingName?: {} | undefined
}
type BatchUpdatePhoneNumberResponse = { PhoneNumberErrors?: {} | undefined }
type UpdateUserRequestItem = {
  UserId: {}
  LicenseType?: {} | undefined
  UserType?: {} | undefined
  AlexaForBusinessMetadata?:
    | { IsAlexaForBusinessEnabled?: {} | undefined; AlexaForBusinessRoomArn?: {} | undefined }
    | undefined
}
type BatchUpdateUserResponse = { UserErrors?: {} | undefined }
type ListUsersResponse = { Users?: {} | undefined; NextToken?: {} | undefined }
type CreateAccountResponse = {
  Account?:
    | {
        AwsAccountId: {}
        AccountId: {}
        Name: {}
        AccountType?: {} | undefined
        CreatedTimestamp?: {} | undefined
        DefaultLicense?: {} | undefined
        SupportedLicenses?: {} | undefined
        AccountStatus?: {} | undefined
        SigninDelegateGroups?: {} | undefined
      }
    | undefined
}
type ListAccountsResponse = { Accounts?: {} | undefined; NextToken?: {} | undefined }
type Tag = { Key: {}; Value: {} }
type CreateAppInstanceResponse = { AppInstanceArn?: {} | undefined }
type ListAppInstancesResponse = { AppInstances?: {} | undefined; NextToken?: {} | undefined }
type CreateAppInstanceAdminResponse = {
  AppInstanceAdmin?: { Arn?: {} | undefined; Name?: {} | undefined } | undefined
  AppInstanceArn?: {} | undefined
}
type ListAppInstanceAdminsResponse = {
  AppInstanceArn?: {} | undefined
  AppInstanceAdmins?: {} | undefined
  NextToken?: {} | undefined
}
type CreateAppInstanceUserResponse = { AppInstanceUserArn?: {} | undefined }
type CreateAttendeeResponse = {
  Attendee?:
    | { ExternalUserId?: {} | undefined; AttendeeId?: {} | undefined; JoinToken?: {} | undefined }
    | undefined
}
type ListAttendeesResponse = { Attendees?: {} | undefined; NextToken?: {} | undefined }
type CreateBotResponse = {
  Bot?:
    | {
        BotId?: {} | undefined
        UserId?: {} | undefined
        DisplayName?: {} | undefined
        BotType?: {} | undefined
        Disabled?: {} | undefined
        CreatedTimestamp?: {} | undefined
        UpdatedTimestamp?: {} | undefined
        BotEmail?: {} | undefined
        SecurityToken?: {} | undefined
      }
    | undefined
}
type ListBotsResponse = { Bots?: {} | undefined; NextToken?: {} | undefined }
type CreateChannelResponse = { ChannelArn?: {} | undefined }
type CreateChannelBanResponse = {
  ChannelArn?: {} | undefined
  Member?: { Arn?: {} | undefined; Name?: {} | undefined } | undefined
}
type ListChannelBansResponse = {
  ChannelArn?: {} | undefined
  NextToken?: {} | undefined
  ChannelBans?: {} | undefined
}
type CreateChannelMembershipResponse = {
  ChannelArn?: {} | undefined
  Member?: { Arn?: {} | undefined; Name?: {} | undefined } | undefined
}
type ListChannelMembershipsResponse = {
  ChannelArn?: {} | undefined
  ChannelMemberships?: {} | undefined
  NextToken?: {} | undefined
}
type CreateChannelModeratorResponse = {
  ChannelArn?: {} | undefined
  ChannelModerator?: { Arn?: {} | undefined; Name?: {} | undefined } | undefined
}
type ListChannelModeratorsResponse = {
  ChannelArn?: {} | undefined
  NextToken?: {} | undefined
  ChannelModerators?: {} | undefined
}
type CreateMediaCapturePipelineResponse = {
  MediaCapturePipeline?:
    | {
        MediaPipelineId?: {} | undefined
        SourceType?: {} | undefined
        SourceArn?: {} | undefined
        Status?: {} | undefined
        SinkType?: {} | undefined
        SinkArn?: {} | undefined
        CreatedTimestamp?: {} | undefined
        UpdatedTimestamp?: {} | undefined
        ChimeSdkMeetingConfiguration?:
          | {
              SourceConfiguration?:
                | {
                    SelectedVideoStreams?:
                      | { AttendeeIds?: {} | undefined; ExternalUserIds?: {} | undefined }
                      | undefined
                  }
                | undefined
              ArtifactsConfiguration?:
                | {
                    Audio: { MuxType: {} }
                    Video: { State: {}; MuxType?: {} | undefined }
                    Content: { State: {}; MuxType?: {} | undefined }
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type ListMediaCapturePipelinesResponse = {
  MediaCapturePipelines?: {} | undefined
  NextToken?: {} | undefined
}
type CreateMeetingResponse = {
  Meeting?:
    | {
        MeetingId?: {} | undefined
        ExternalMeetingId?: {} | undefined
        MediaPlacement?:
          | {
              AudioHostUrl?: {} | undefined
              AudioFallbackUrl?: {} | undefined
              ScreenDataUrl?: {} | undefined
              ScreenSharingUrl?: {} | undefined
              ScreenViewingUrl?: {} | undefined
              SignalingUrl?: {} | undefined
              TurnControlUrl?: {} | undefined
              EventIngestionUrl?: {} | undefined
            }
          | undefined
        MediaRegion?: {} | undefined
      }
    | undefined
}
type ListMeetingsResponse = { Meetings?: {} | undefined; NextToken?: {} | undefined }
type CreateMeetingDialOutResponse = { TransactionId?: {} | undefined }
type CreateMeetingWithAttendeesResponse = {
  Meeting?:
    | {
        MeetingId?: {} | undefined
        ExternalMeetingId?: {} | undefined
        MediaPlacement?:
          | {
              AudioHostUrl?: {} | undefined
              AudioFallbackUrl?: {} | undefined
              ScreenDataUrl?: {} | undefined
              ScreenSharingUrl?: {} | undefined
              ScreenViewingUrl?: {} | undefined
              SignalingUrl?: {} | undefined
              TurnControlUrl?: {} | undefined
              EventIngestionUrl?: {} | undefined
            }
          | undefined
        MediaRegion?: {} | undefined
      }
    | undefined
  Attendees?: {} | undefined
  Errors?: {} | undefined
}
type CreatePhoneNumberOrderResponse = {
  PhoneNumberOrder?:
    | {
        PhoneNumberOrderId?: {} | undefined
        ProductType?: {} | undefined
        Status?: {} | undefined
        OrderedPhoneNumbers?: {} | undefined
        CreatedTimestamp?: {} | undefined
        UpdatedTimestamp?: {} | undefined
      }
    | undefined
}
type ListPhoneNumberOrdersResponse = {
  PhoneNumberOrders?: {} | undefined
  NextToken?: {} | undefined
}
type Capability = 'Voice' | 'SMS'
type CreateProxySessionResponse = {
  ProxySession?:
    | {
        VoiceConnectorId?: {} | undefined
        ProxySessionId?: {} | undefined
        Name?: {} | undefined
        Status?: {} | undefined
        ExpiryMinutes?: {} | undefined
        Capabilities?: {} | undefined
        CreatedTimestamp?: {} | undefined
        UpdatedTimestamp?: {} | undefined
        EndedTimestamp?: {} | undefined
        Participants?: {} | undefined
        NumberSelectionBehavior?: {} | undefined
        GeoMatchLevel?: {} | undefined
        GeoMatchParams?: { Country: {}; AreaCode: {} } | undefined
      }
    | undefined
}
type ListProxySessionsResponse = { ProxySessions?: {} | undefined; NextToken?: {} | undefined }
type CreateRoomResponse = {
  Room?:
    | {
        RoomId?: {} | undefined
        Name?: {} | undefined
        AccountId?: {} | undefined
        CreatedBy?: {} | undefined
        CreatedTimestamp?: {} | undefined
        UpdatedTimestamp?: {} | undefined
      }
    | undefined
}
type ListRoomsResponse = { Rooms?: {} | undefined; NextToken?: {} | undefined }
type CreateRoomMembershipResponse = {
  RoomMembership?:
    | {
        RoomId?: {} | undefined
        Member?:
          | {
              MemberId?: {} | undefined
              MemberType?: {} | undefined
              Email?: {} | undefined
              FullName?: {} | undefined
              AccountId?: {} | undefined
            }
          | undefined
        Role?: {} | undefined
        InvitedBy?: {} | undefined
        UpdatedTimestamp?: {} | undefined
      }
    | undefined
}
type ListRoomMembershipsResponse = { RoomMemberships?: {} | undefined; NextToken?: {} | undefined }
type SipMediaApplicationEndpoint = { LambdaArn?: {} | undefined }
type CreateSipMediaApplicationResponse = {
  SipMediaApplication?:
    | {
        SipMediaApplicationId?: {} | undefined
        AwsRegion?: {} | undefined
        Name?: {} | undefined
        Endpoints?: {} | undefined
        CreatedTimestamp?: {} | undefined
        UpdatedTimestamp?: {} | undefined
      }
    | undefined
}
type ListSipMediaApplicationsResponse = {
  SipMediaApplications?: {} | undefined
  NextToken?: {} | undefined
}
type SensitiveString = string
type CreateSipMediaApplicationCallResponse = {
  SipMediaApplicationCall?: { TransactionId?: {} | undefined } | undefined
}
type SipRuleTargetApplication = {
  SipMediaApplicationId?: {} | undefined
  Priority?: {} | undefined
  AwsRegion?: {} | undefined
}
type CreateSipRuleResponse = {
  SipRule?:
    | {
        SipRuleId?: {} | undefined
        Name?: {} | undefined
        Disabled?: {} | undefined
        TriggerType?: {} | undefined
        TriggerValue?: {} | undefined
        TargetApplications?: {} | undefined
        CreatedTimestamp?: {} | undefined
        UpdatedTimestamp?: {} | undefined
      }
    | undefined
}
type ListSipRulesResponse = { SipRules?: {} | undefined; NextToken?: {} | undefined }
type CreateUserResponse = {
  User?:
    | {
        UserId: {}
        AccountId?: {} | undefined
        PrimaryEmail?: {} | undefined
        PrimaryProvisionedNumber?: {} | undefined
        DisplayName?: {} | undefined
        LicenseType?: {} | undefined
        UserType?: {} | undefined
        UserRegistrationStatus?: {} | undefined
        UserInvitationStatus?: {} | undefined
        RegisteredOn?: {} | undefined
        InvitedOn?: {} | undefined
        AlexaForBusinessMetadata?:
          | { IsAlexaForBusinessEnabled?: {} | undefined; AlexaForBusinessRoomArn?: {} | undefined }
          | undefined
        PersonalPIN?: {} | undefined
      }
    | undefined
}
type CreateVoiceConnectorResponse = {
  VoiceConnector?:
    | {
        VoiceConnectorId?: {} | undefined
        AwsRegion?: {} | undefined
        Name?: {} | undefined
        OutboundHostName?: {} | undefined
        RequireEncryption?: {} | undefined
        CreatedTimestamp?: {} | undefined
        UpdatedTimestamp?: {} | undefined
        VoiceConnectorArn?: {} | undefined
      }
    | undefined
}
type ListVoiceConnectorsResponse = { VoiceConnectors?: {} | undefined; NextToken?: {} | undefined }
type VoiceConnectorItem = { VoiceConnectorId: {}; Priority: {} }
type CreateVoiceConnectorGroupResponse = {
  VoiceConnectorGroup?:
    | {
        VoiceConnectorGroupId?: {} | undefined
        Name?: {} | undefined
        VoiceConnectorItems?: {} | undefined
        CreatedTimestamp?: {} | undefined
        UpdatedTimestamp?: {} | undefined
        VoiceConnectorGroupArn?: {} | undefined
      }
    | undefined
}
type ListVoiceConnectorGroupsResponse = {
  VoiceConnectorGroups?: {} | undefined
  NextToken?: {} | undefined
}
type DeleteAccountResponse = { [x: string]: unknown }
type GetAccountResponse = {
  Account?:
    | {
        AwsAccountId: {}
        AccountId: {}
        Name: {}
        AccountType?: {} | undefined
        CreatedTimestamp?: {} | undefined
        DefaultLicense?: {} | undefined
        SupportedLicenses?: {} | undefined
        AccountStatus?: {} | undefined
        SigninDelegateGroups?: {} | undefined
      }
    | undefined
}
type UpdateAccountResponse = {
  Account?:
    | {
        AwsAccountId: {}
        AccountId: {}
        Name: {}
        AccountType?: {} | undefined
        CreatedTimestamp?: {} | undefined
        DefaultLicense?: {} | undefined
        SupportedLicenses?: {} | undefined
        AccountStatus?: {} | undefined
        SigninDelegateGroups?: {} | undefined
      }
    | undefined
}
type DescribeAppInstanceResponse = {
  AppInstance?:
    | {
        AppInstanceArn?: {} | undefined
        Name?: {} | undefined
        Metadata?: {} | undefined
        CreatedTimestamp?: {} | undefined
        LastUpdatedTimestamp?: {} | undefined
      }
    | undefined
}
type UpdateAppInstanceResponse = { AppInstanceArn?: {} | undefined }
type DescribeAppInstanceAdminResponse = {
  AppInstanceAdmin?:
    | {
        Admin?: { Arn?: {} | undefined; Name?: {} | undefined } | undefined
        AppInstanceArn?: {} | undefined
        CreatedTimestamp?: {} | undefined
      }
    | undefined
}
type GetAppInstanceStreamingConfigurationsResponse = {
  AppInstanceStreamingConfigurations?: {} | undefined
}
type AppInstanceStreamingConfiguration = { AppInstanceDataType: {}; ResourceArn: {} }
type PutAppInstanceStreamingConfigurationsResponse = {
  AppInstanceStreamingConfigurations?: {} | undefined
}
type DescribeAppInstanceUserResponse = {
  AppInstanceUser?:
    | {
        AppInstanceUserArn?: {} | undefined
        Name?: {} | undefined
        CreatedTimestamp?: {} | undefined
        Metadata?: {} | undefined
        LastUpdatedTimestamp?: {} | undefined
      }
    | undefined
}
type UpdateAppInstanceUserResponse = { AppInstanceUserArn?: {} | undefined }
type GetAttendeeResponse = {
  Attendee?:
    | { ExternalUserId?: {} | undefined; AttendeeId?: {} | undefined; JoinToken?: {} | undefined }
    | undefined
}
type DescribeChannelResponse = {
  Channel?:
    | {
        Name?: {} | undefined
        ChannelArn?: {} | undefined
        Mode?: {} | undefined
        Privacy?: {} | undefined
        Metadata?: {} | undefined
        CreatedBy?: { Arn?: {} | undefined; Name?: {} | undefined } | undefined
        CreatedTimestamp?: {} | undefined
        LastMessageTimestamp?: {} | undefined
        LastUpdatedTimestamp?: {} | undefined
      }
    | undefined
}
type UpdateChannelResponse = { ChannelArn?: {} | undefined }
type DescribeChannelBanResponse = {
  ChannelBan?:
    | {
        Member?: { Arn?: {} | undefined; Name?: {} | undefined } | undefined
        ChannelArn?: {} | undefined
        CreatedTimestamp?: {} | undefined
        CreatedBy?: { Arn?: {} | undefined; Name?: {} | undefined } | undefined
      }
    | undefined
}
type DescribeChannelMembershipResponse = {
  ChannelMembership?:
    | {
        InvitedBy?: { Arn?: {} | undefined; Name?: {} | undefined } | undefined
        Type?: {} | undefined
        Member?: { Arn?: {} | undefined; Name?: {} | undefined } | undefined
        ChannelArn?: {} | undefined
        CreatedTimestamp?: {} | undefined
        LastUpdatedTimestamp?: {} | undefined
      }
    | undefined
}
type GetChannelMessageResponse = {
  ChannelMessage?:
    | {
        ChannelArn?: {} | undefined
        MessageId?: {} | undefined
        Content?: {} | undefined
        Metadata?: {} | undefined
        Type?: {} | undefined
        CreatedTimestamp?: {} | undefined
        LastEditedTimestamp?: {} | undefined
        LastUpdatedTimestamp?: {} | undefined
        Sender?: { Arn?: {} | undefined; Name?: {} | undefined } | undefined
        Redacted?: {} | undefined
        Persistence?: {} | undefined
      }
    | undefined
}
type UpdateChannelMessageResponse = { ChannelArn?: {} | undefined; MessageId?: {} | undefined }
type DescribeChannelModeratorResponse = {
  ChannelModerator?:
    | {
        Moderator?: { Arn?: {} | undefined; Name?: {} | undefined } | undefined
        ChannelArn?: {} | undefined
        CreatedTimestamp?: {} | undefined
        CreatedBy?: { Arn?: {} | undefined; Name?: {} | undefined } | undefined
      }
    | undefined
}
type GetEventsConfigurationResponse = {
  EventsConfiguration?:
    | {
        BotId?: {} | undefined
        OutboundEventsHTTPSEndpoint?: {} | undefined
        LambdaFunctionArn?: {} | undefined
      }
    | undefined
}
type PutEventsConfigurationResponse = {
  EventsConfiguration?:
    | {
        BotId?: {} | undefined
        OutboundEventsHTTPSEndpoint?: {} | undefined
        LambdaFunctionArn?: {} | undefined
      }
    | undefined
}
type GetMediaCapturePipelineResponse = {
  MediaCapturePipeline?:
    | {
        MediaPipelineId?: {} | undefined
        SourceType?: {} | undefined
        SourceArn?: {} | undefined
        Status?: {} | undefined
        SinkType?: {} | undefined
        SinkArn?: {} | undefined
        CreatedTimestamp?: {} | undefined
        UpdatedTimestamp?: {} | undefined
        ChimeSdkMeetingConfiguration?:
          | {
              SourceConfiguration?:
                | {
                    SelectedVideoStreams?:
                      | { AttendeeIds?: {} | undefined; ExternalUserIds?: {} | undefined }
                      | undefined
                  }
                | undefined
              ArtifactsConfiguration?:
                | {
                    Audio: { MuxType: {} }
                    Video: { State: {}; MuxType?: {} | undefined }
                    Content: { State: {}; MuxType?: {} | undefined }
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type GetMeetingResponse = {
  Meeting?:
    | {
        MeetingId?: {} | undefined
        ExternalMeetingId?: {} | undefined
        MediaPlacement?:
          | {
              AudioHostUrl?: {} | undefined
              AudioFallbackUrl?: {} | undefined
              ScreenDataUrl?: {} | undefined
              ScreenSharingUrl?: {} | undefined
              ScreenViewingUrl?: {} | undefined
              SignalingUrl?: {} | undefined
              TurnControlUrl?: {} | undefined
              EventIngestionUrl?: {} | undefined
            }
          | undefined
        MediaRegion?: {} | undefined
      }
    | undefined
}
type GetPhoneNumberResponse = {
  PhoneNumber?:
    | {
        PhoneNumberId?: {} | undefined
        E164PhoneNumber?: {} | undefined
        Country?: {} | undefined
        Type?: {} | undefined
        ProductType?: {} | undefined
        Status?: {} | undefined
        Capabilities?:
          | {
              InboundCall?: {} | undefined
              OutboundCall?: {} | undefined
              InboundSMS?: {} | undefined
              OutboundSMS?: {} | undefined
              InboundMMS?: {} | undefined
              OutboundMMS?: {} | undefined
            }
          | undefined
        Associations?: {} | undefined
        CallingName?: {} | undefined
        CallingNameStatus?: {} | undefined
        CreatedTimestamp?: {} | undefined
        UpdatedTimestamp?: {} | undefined
        DeletionTimestamp?: {} | undefined
      }
    | undefined
}
type UpdatePhoneNumberResponse = {
  PhoneNumber?:
    | {
        PhoneNumberId?: {} | undefined
        E164PhoneNumber?: {} | undefined
        Country?: {} | undefined
        Type?: {} | undefined
        ProductType?: {} | undefined
        Status?: {} | undefined
        Capabilities?:
          | {
              InboundCall?: {} | undefined
              OutboundCall?: {} | undefined
              InboundSMS?: {} | undefined
              OutboundSMS?: {} | undefined
              InboundMMS?: {} | undefined
              OutboundMMS?: {} | undefined
            }
          | undefined
        Associations?: {} | undefined
        CallingName?: {} | undefined
        CallingNameStatus?: {} | undefined
        CreatedTimestamp?: {} | undefined
        UpdatedTimestamp?: {} | undefined
        DeletionTimestamp?: {} | undefined
      }
    | undefined
}
type GetProxySessionResponse = {
  ProxySession?:
    | {
        VoiceConnectorId?: {} | undefined
        ProxySessionId?: {} | undefined
        Name?: {} | undefined
        Status?: {} | undefined
        ExpiryMinutes?: {} | undefined
        Capabilities?: {} | undefined
        CreatedTimestamp?: {} | undefined
        UpdatedTimestamp?: {} | undefined
        EndedTimestamp?: {} | undefined
        Participants?: {} | undefined
        NumberSelectionBehavior?: {} | undefined
        GeoMatchLevel?: {} | undefined
        GeoMatchParams?: { Country: {}; AreaCode: {} } | undefined
      }
    | undefined
}
type UpdateProxySessionResponse = {
  ProxySession?:
    | {
        VoiceConnectorId?: {} | undefined
        ProxySessionId?: {} | undefined
        Name?: {} | undefined
        Status?: {} | undefined
        ExpiryMinutes?: {} | undefined
        Capabilities?: {} | undefined
        CreatedTimestamp?: {} | undefined
        UpdatedTimestamp?: {} | undefined
        EndedTimestamp?: {} | undefined
        Participants?: {} | undefined
        NumberSelectionBehavior?: {} | undefined
        GeoMatchLevel?: {} | undefined
        GeoMatchParams?: { Country: {}; AreaCode: {} } | undefined
      }
    | undefined
}
type GetRoomResponse = {
  Room?:
    | {
        RoomId?: {} | undefined
        Name?: {} | undefined
        AccountId?: {} | undefined
        CreatedBy?: {} | undefined
        CreatedTimestamp?: {} | undefined
        UpdatedTimestamp?: {} | undefined
      }
    | undefined
}
type UpdateRoomResponse = {
  Room?:
    | {
        RoomId?: {} | undefined
        Name?: {} | undefined
        AccountId?: {} | undefined
        CreatedBy?: {} | undefined
        CreatedTimestamp?: {} | undefined
        UpdatedTimestamp?: {} | undefined
      }
    | undefined
}
type UpdateRoomMembershipResponse = {
  RoomMembership?:
    | {
        RoomId?: {} | undefined
        Member?:
          | {
              MemberId?: {} | undefined
              MemberType?: {} | undefined
              Email?: {} | undefined
              FullName?: {} | undefined
              AccountId?: {} | undefined
            }
          | undefined
        Role?: {} | undefined
        InvitedBy?: {} | undefined
        UpdatedTimestamp?: {} | undefined
      }
    | undefined
}
type GetSipMediaApplicationResponse = {
  SipMediaApplication?:
    | {
        SipMediaApplicationId?: {} | undefined
        AwsRegion?: {} | undefined
        Name?: {} | undefined
        Endpoints?: {} | undefined
        CreatedTimestamp?: {} | undefined
        UpdatedTimestamp?: {} | undefined
      }
    | undefined
}
type UpdateSipMediaApplicationResponse = {
  SipMediaApplication?:
    | {
        SipMediaApplicationId?: {} | undefined
        AwsRegion?: {} | undefined
        Name?: {} | undefined
        Endpoints?: {} | undefined
        CreatedTimestamp?: {} | undefined
        UpdatedTimestamp?: {} | undefined
      }
    | undefined
}
type GetSipRuleResponse = {
  SipRule?:
    | {
        SipRuleId?: {} | undefined
        Name?: {} | undefined
        Disabled?: {} | undefined
        TriggerType?: {} | undefined
        TriggerValue?: {} | undefined
        TargetApplications?: {} | undefined
        CreatedTimestamp?: {} | undefined
        UpdatedTimestamp?: {} | undefined
      }
    | undefined
}
type UpdateSipRuleResponse = {
  SipRule?:
    | {
        SipRuleId?: {} | undefined
        Name?: {} | undefined
        Disabled?: {} | undefined
        TriggerType?: {} | undefined
        TriggerValue?: {} | undefined
        TargetApplications?: {} | undefined
        CreatedTimestamp?: {} | undefined
        UpdatedTimestamp?: {} | undefined
      }
    | undefined
}
type GetVoiceConnectorResponse = {
  VoiceConnector?:
    | {
        VoiceConnectorId?: {} | undefined
        AwsRegion?: {} | undefined
        Name?: {} | undefined
        OutboundHostName?: {} | undefined
        RequireEncryption?: {} | undefined
        CreatedTimestamp?: {} | undefined
        UpdatedTimestamp?: {} | undefined
        VoiceConnectorArn?: {} | undefined
      }
    | undefined
}
type UpdateVoiceConnectorResponse = {
  VoiceConnector?:
    | {
        VoiceConnectorId?: {} | undefined
        AwsRegion?: {} | undefined
        Name?: {} | undefined
        OutboundHostName?: {} | undefined
        RequireEncryption?: {} | undefined
        CreatedTimestamp?: {} | undefined
        UpdatedTimestamp?: {} | undefined
        VoiceConnectorArn?: {} | undefined
      }
    | undefined
}
type GetVoiceConnectorEmergencyCallingConfigurationResponse = {
  EmergencyCallingConfiguration?: { DNIS?: {} | undefined } | undefined
}
type PutVoiceConnectorEmergencyCallingConfigurationResponse = {
  EmergencyCallingConfiguration?: { DNIS?: {} | undefined } | undefined
}
type GetVoiceConnectorGroupResponse = {
  VoiceConnectorGroup?:
    | {
        VoiceConnectorGroupId?: {} | undefined
        Name?: {} | undefined
        VoiceConnectorItems?: {} | undefined
        CreatedTimestamp?: {} | undefined
        UpdatedTimestamp?: {} | undefined
        VoiceConnectorGroupArn?: {} | undefined
      }
    | undefined
}
type UpdateVoiceConnectorGroupResponse = {
  VoiceConnectorGroup?:
    | {
        VoiceConnectorGroupId?: {} | undefined
        Name?: {} | undefined
        VoiceConnectorItems?: {} | undefined
        CreatedTimestamp?: {} | undefined
        UpdatedTimestamp?: {} | undefined
        VoiceConnectorGroupArn?: {} | undefined
      }
    | undefined
}
type GetVoiceConnectorOriginationResponse = {
  Origination?: { Routes?: {} | undefined; Disabled?: {} | undefined } | undefined
}
type PutVoiceConnectorOriginationResponse = {
  Origination?: { Routes?: {} | undefined; Disabled?: {} | undefined } | undefined
}
type GetVoiceConnectorProxyResponse = {
  Proxy?:
    | {
        DefaultSessionExpiryMinutes?: {} | undefined
        Disabled?: {} | undefined
        FallBackPhoneNumber?: {} | undefined
        PhoneNumberCountries?: {} | undefined
      }
    | undefined
}
type Country = string
type PutVoiceConnectorProxyResponse = {
  Proxy?:
    | {
        DefaultSessionExpiryMinutes?: {} | undefined
        Disabled?: {} | undefined
        FallBackPhoneNumber?: {} | undefined
        PhoneNumberCountries?: {} | undefined
      }
    | undefined
}
type GetVoiceConnectorStreamingConfigurationResponse = {
  StreamingConfiguration?:
    | {
        DataRetentionInHours: {}
        Disabled?: {} | undefined
        StreamingNotificationTargets?: {} | undefined
      }
    | undefined
}
type PutVoiceConnectorStreamingConfigurationResponse = {
  StreamingConfiguration?:
    | {
        DataRetentionInHours: {}
        Disabled?: {} | undefined
        StreamingNotificationTargets?: {} | undefined
      }
    | undefined
}
type GetVoiceConnectorTerminationResponse = {
  Termination?:
    | {
        CpsLimit?: {} | undefined
        DefaultPhoneNumber?: {} | undefined
        CallingRegions?: {} | undefined
        CidrAllowedList?: {} | undefined
        Disabled?: {} | undefined
      }
    | undefined
}
type PutVoiceConnectorTerminationResponse = {
  Termination?:
    | {
        CpsLimit?: {} | undefined
        DefaultPhoneNumber?: {} | undefined
        CallingRegions?: {} | undefined
        CidrAllowedList?: {} | undefined
        Disabled?: {} | undefined
      }
    | undefined
}
type DescribeChannelMembershipForAppInstanceUserResponse = {
  ChannelMembership?:
    | {
        ChannelSummary?:
          | {
              Name?: {} | undefined
              ChannelArn?: {} | undefined
              Mode?: {} | undefined
              Privacy?: {} | undefined
              Metadata?: {} | undefined
              LastMessageTimestamp?: {} | undefined
            }
          | undefined
        AppInstanceUserMembershipSummary?:
          | { Type?: {} | undefined; ReadMarkerTimestamp?: {} | undefined }
          | undefined
      }
    | undefined
}
type DescribeChannelModeratedByAppInstanceUserResponse = {
  Channel?:
    | {
        ChannelSummary?:
          | {
              Name?: {} | undefined
              ChannelArn?: {} | undefined
              Mode?: {} | undefined
              Privacy?: {} | undefined
              Metadata?: {} | undefined
              LastMessageTimestamp?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type DisassociatePhoneNumberFromUserResponse = { [x: string]: unknown }
type DisassociatePhoneNumbersFromVoiceConnectorResponse = { PhoneNumberErrors?: {} | undefined }
type DisassociatePhoneNumbersFromVoiceConnectorGroupResponse = {
  PhoneNumberErrors?: {} | undefined
}
type DisassociateSigninDelegateGroupsFromAccountResponse = { [x: string]: unknown }
type GetAccountSettingsResponse = {
  AccountSettings?:
    | { DisableRemoteControl?: {} | undefined; EnableDialOut?: {} | undefined }
    | undefined
}
type UpdateAccountSettingsResponse = { [x: string]: unknown }
type GetAppInstanceRetentionSettingsResponse = {
  AppInstanceRetentionSettings?:
    | { ChannelRetentionSettings?: { RetentionDays?: {} | undefined } | undefined }
    | undefined
  InitiateDeletionTimestamp?: {} | undefined
}
type PutAppInstanceRetentionSettingsResponse = {
  AppInstanceRetentionSettings?:
    | { ChannelRetentionSettings?: { RetentionDays?: {} | undefined } | undefined }
    | undefined
  InitiateDeletionTimestamp?: {} | undefined
}
type GetBotResponse = {
  Bot?:
    | {
        BotId?: {} | undefined
        UserId?: {} | undefined
        DisplayName?: {} | undefined
        BotType?: {} | undefined
        Disabled?: {} | undefined
        CreatedTimestamp?: {} | undefined
        UpdatedTimestamp?: {} | undefined
        BotEmail?: {} | undefined
        SecurityToken?: {} | undefined
      }
    | undefined
}
type UpdateBotResponse = {
  Bot?:
    | {
        BotId?: {} | undefined
        UserId?: {} | undefined
        DisplayName?: {} | undefined
        BotType?: {} | undefined
        Disabled?: {} | undefined
        CreatedTimestamp?: {} | undefined
        UpdatedTimestamp?: {} | undefined
        BotEmail?: {} | undefined
        SecurityToken?: {} | undefined
      }
    | undefined
}
type GetGlobalSettingsResponse = {
  BusinessCalling?: { CdrBucket?: {} | undefined } | undefined
  VoiceConnector?: { CdrBucket?: {} | undefined } | undefined
}
type GetMessagingSessionEndpointResponse = { Endpoint?: { Url?: {} | undefined } | undefined }
type GetPhoneNumberOrderResponse = {
  PhoneNumberOrder?:
    | {
        PhoneNumberOrderId?: {} | undefined
        ProductType?: {} | undefined
        Status?: {} | undefined
        OrderedPhoneNumbers?: {} | undefined
        CreatedTimestamp?: {} | undefined
        UpdatedTimestamp?: {} | undefined
      }
    | undefined
}
type GetPhoneNumberSettingsResponse = {
  CallingName?: {} | undefined
  CallingNameUpdatedTimestamp?: {} | undefined
}
type GetRetentionSettingsResponse = {
  RetentionSettings?:
    | {
        RoomRetentionSettings?: { RetentionDays?: {} | undefined } | undefined
        ConversationRetentionSettings?: { RetentionDays?: {} | undefined } | undefined
      }
    | undefined
  InitiateDeletionTimestamp?: {} | undefined
}
type PutRetentionSettingsResponse = {
  RetentionSettings?:
    | {
        RoomRetentionSettings?: { RetentionDays?: {} | undefined } | undefined
        ConversationRetentionSettings?: { RetentionDays?: {} | undefined } | undefined
      }
    | undefined
  InitiateDeletionTimestamp?: {} | undefined
}
type GetSipMediaApplicationLoggingConfigurationResponse = {
  SipMediaApplicationLoggingConfiguration?:
    | { EnableSipMediaApplicationMessageLogs?: {} | undefined }
    | undefined
}
type PutSipMediaApplicationLoggingConfigurationResponse = {
  SipMediaApplicationLoggingConfiguration?:
    | { EnableSipMediaApplicationMessageLogs?: {} | undefined }
    | undefined
}
type GetUserResponse = {
  User?:
    | {
        UserId: {}
        AccountId?: {} | undefined
        PrimaryEmail?: {} | undefined
        PrimaryProvisionedNumber?: {} | undefined
        DisplayName?: {} | undefined
        LicenseType?: {} | undefined
        UserType?: {} | undefined
        UserRegistrationStatus?: {} | undefined
        UserInvitationStatus?: {} | undefined
        RegisteredOn?: {} | undefined
        InvitedOn?: {} | undefined
        AlexaForBusinessMetadata?:
          | { IsAlexaForBusinessEnabled?: {} | undefined; AlexaForBusinessRoomArn?: {} | undefined }
          | undefined
        PersonalPIN?: {} | undefined
      }
    | undefined
}
type UpdateUserResponse = {
  User?:
    | {
        UserId: {}
        AccountId?: {} | undefined
        PrimaryEmail?: {} | undefined
        PrimaryProvisionedNumber?: {} | undefined
        DisplayName?: {} | undefined
        LicenseType?: {} | undefined
        UserType?: {} | undefined
        UserRegistrationStatus?: {} | undefined
        UserInvitationStatus?: {} | undefined
        RegisteredOn?: {} | undefined
        InvitedOn?: {} | undefined
        AlexaForBusinessMetadata?:
          | { IsAlexaForBusinessEnabled?: {} | undefined; AlexaForBusinessRoomArn?: {} | undefined }
          | undefined
        PersonalPIN?: {} | undefined
      }
    | undefined
}
type GetUserSettingsResponse = {
  UserSettings?: { Telephony: { InboundCalling: {}; OutboundCalling: {}; SMS: {} } } | undefined
}
type GetVoiceConnectorLoggingConfigurationResponse = {
  LoggingConfiguration?:
    | { EnableSIPLogs?: {} | undefined; EnableMediaMetricLogs?: {} | undefined }
    | undefined
}
type PutVoiceConnectorLoggingConfigurationResponse = {
  LoggingConfiguration?:
    | { EnableSIPLogs?: {} | undefined; EnableMediaMetricLogs?: {} | undefined }
    | undefined
}
type GetVoiceConnectorTerminationHealthResponse = {
  TerminationHealth?: { Timestamp?: {} | undefined; Source?: {} | undefined } | undefined
}
type EmailAddress = string
type InviteUsersResponse = { Invites?: {} | undefined }
type ListAppInstanceUsersResponse = {
  AppInstanceArn?: {} | undefined
  AppInstanceUsers?: {} | undefined
  NextToken?: {} | undefined
}
type ListAttendeeTagsResponse = { Tags?: {} | undefined }
type ListChannelMembershipsForAppInstanceUserResponse = {
  ChannelMemberships?: {} | undefined
  NextToken?: {} | undefined
}
type ListChannelMessagesResponse = {
  ChannelArn?: {} | undefined
  NextToken?: {} | undefined
  ChannelMessages?: {} | undefined
}
type SendChannelMessageResponse = { ChannelArn?: {} | undefined; MessageId?: {} | undefined }
type ListChannelsResponse = { Channels?: {} | undefined; NextToken?: {} | undefined }
type ListChannelsModeratedByAppInstanceUserResponse = {
  Channels?: {} | undefined
  NextToken?: {} | undefined
}
type ListMeetingTagsResponse = { Tags?: {} | undefined }
type ListPhoneNumbersResponse = { PhoneNumbers?: {} | undefined; NextToken?: {} | undefined }
type ListSupportedPhoneNumberCountriesResponse = { PhoneNumberCountries?: {} | undefined }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type ListVoiceConnectorTerminationCredentialsResponse = { Usernames?: {} | undefined }
type LogoutUserResponse = { [x: string]: unknown }
type Credential = { Username?: {} | undefined; Password?: {} | undefined }
type RedactChannelMessageResponse = { ChannelArn?: {} | undefined; MessageId?: {} | undefined }
type RedactConversationMessageResponse = { [x: string]: unknown }
type RedactRoomMessageResponse = { [x: string]: unknown }
type RegenerateSecurityTokenResponse = {
  Bot?:
    | {
        BotId?: {} | undefined
        UserId?: {} | undefined
        DisplayName?: {} | undefined
        BotType?: {} | undefined
        Disabled?: {} | undefined
        CreatedTimestamp?: {} | undefined
        UpdatedTimestamp?: {} | undefined
        BotEmail?: {} | undefined
        SecurityToken?: {} | undefined
      }
    | undefined
}
type ResetPersonalPINResponse = {
  User?:
    | {
        UserId: {}
        AccountId?: {} | undefined
        PrimaryEmail?: {} | undefined
        PrimaryProvisionedNumber?: {} | undefined
        DisplayName?: {} | undefined
        LicenseType?: {} | undefined
        UserType?: {} | undefined
        UserRegistrationStatus?: {} | undefined
        UserInvitationStatus?: {} | undefined
        RegisteredOn?: {} | undefined
        InvitedOn?: {} | undefined
        AlexaForBusinessMetadata?:
          | { IsAlexaForBusinessEnabled?: {} | undefined; AlexaForBusinessRoomArn?: {} | undefined }
          | undefined
        PersonalPIN?: {} | undefined
      }
    | undefined
}
type RestorePhoneNumberResponse = {
  PhoneNumber?:
    | {
        PhoneNumberId?: {} | undefined
        E164PhoneNumber?: {} | undefined
        Country?: {} | undefined
        Type?: {} | undefined
        ProductType?: {} | undefined
        Status?: {} | undefined
        Capabilities?:
          | {
              InboundCall?: {} | undefined
              OutboundCall?: {} | undefined
              InboundSMS?: {} | undefined
              OutboundSMS?: {} | undefined
              InboundMMS?: {} | undefined
              OutboundMMS?: {} | undefined
            }
          | undefined
        Associations?: {} | undefined
        CallingName?: {} | undefined
        CallingNameStatus?: {} | undefined
        CreatedTimestamp?: {} | undefined
        UpdatedTimestamp?: {} | undefined
        DeletionTimestamp?: {} | undefined
      }
    | undefined
}
type SearchAvailablePhoneNumbersResponse = {
  E164PhoneNumbers?: {} | undefined
  NextToken?: {} | undefined
}
type StartMeetingTranscriptionResponse = { [x: string]: unknown }
type StopMeetingTranscriptionResponse = { [x: string]: unknown }
type TagKey = string
type UpdateChannelReadMarkerResponse = { ChannelArn?: {} | undefined }
type UpdateSipMediaApplicationCallResponse = {
  SipMediaApplicationCall?: { TransactionId?: {} | undefined } | undefined
}
type ValidateE911AddressResponse = {
  ValidationResult?: {} | undefined
  AddressExternalId?: {} | undefined
  Address?:
    | {
        streetName?: {} | undefined
        streetSuffix?: {} | undefined
        postDirectional?: {} | undefined
        preDirectional?: {} | undefined
        streetNumber?: {} | undefined
        city?: {} | undefined
        state?: {} | undefined
        postalCode?: {} | undefined
        postalCodePlus4?: {} | undefined
        country?: {} | undefined
      }
    | undefined
  CandidateAddressList?: {} | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/accounts/:accountId/users/:userId#operation=associate-phone-number': {
      $post: {
        input: { param: { accountId: string; userId: string } } & {
          query: { operation: 'associate-phone-number' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { E164PhoneNumber: string } }
        output: AssociatePhoneNumberWithUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/voice-connectors/:voiceConnectorId#operation=associate-phone-numbers': {
      $post: {
        input: { param: { voiceConnectorId: string } } & {
          query: { operation: 'associate-phone-numbers' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { E164PhoneNumbers: E164PhoneNumber[]; ForceAssociate?: boolean | undefined } }
        output: AssociatePhoneNumbersWithVoiceConnectorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/voice-connector-groups/:voiceConnectorGroupId#operation=associate-phone-numbers': {
      $post: {
        input: { param: { voiceConnectorGroupId: string } } & {
          query: { operation: 'associate-phone-numbers' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { E164PhoneNumbers: E164PhoneNumber[]; ForceAssociate?: boolean | undefined } }
        output: AssociatePhoneNumbersWithVoiceConnectorGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId#operation=associate-signin-delegate-groups': {
      $post: {
        input: { param: { accountId: string } } & {
          query: { operation: 'associate-signin-delegate-groups' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { SigninDelegateGroups: SigninDelegateGroup[] } }
        output: AssociateSigninDelegateGroupsWithAccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/meetings/:meetingId/attendees#operation=batch-create': {
      $post: {
        input: { param: { meetingId: string } } & { query: { operation: 'batch-create' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Attendees: CreateAttendeeRequestItem[] } }
        output: BatchCreateAttendeeResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/channels/:channelArn/memberships#operation=batch-create': {
      $post: {
        input: { param: { channelArn: string } } & { query: { operation: 'batch-create' } } & {
          header: {
            'x-amz-chime-bearer'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Type?: 'DEFAULT' | 'HIDDEN' | undefined; MemberArns: ChimeArn[] } }
        output: BatchCreateChannelMembershipResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/rooms/:roomId/memberships#operation=batch-create': {
      $post: {
        input: { param: { accountId: string; roomId: string } } & {
          query: { operation: 'batch-create' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { MembershipItemList: MembershipItem[] } }
        output: BatchCreateRoomMembershipResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/phone-numbers#operation=batch-delete': {
      $post: {
        input: { query: { operation: 'batch-delete' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { PhoneNumberIds: String[] } }
        output: BatchDeletePhoneNumberResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/users#operation=suspend': {
      $post: {
        input: { param: { accountId: string } } & { query: { operation: 'suspend' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { UserIdList: NonEmptyString[] } }
        output: BatchSuspendUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/users#operation=unsuspend': {
      $post: {
        input: { param: { accountId: string } } & { query: { operation: 'unsuspend' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { UserIdList: NonEmptyString[] } }
        output: BatchUnsuspendUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/phone-numbers#operation=batch-update': {
      $post: {
        input: { query: { operation: 'batch-update' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { UpdatePhoneNumberRequestItems: UpdatePhoneNumberRequestItem[] } }
        output: BatchUpdatePhoneNumberResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/users': {
      $post: {
        input: { param: { accountId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { UpdateUserRequestItems: UpdateUserRequestItem[] } }
        output: BatchUpdateUserResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { accountId: string } } & {
          query: {
            'user-email'?: string | undefined
            'user-type'?: 'PrivateUser' | 'SharedDevice' | undefined
            'max-results'?: number | undefined
            'next-token'?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListUsersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Name: string } }
        output: CreateAccountResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            name?: string | undefined
            'user-email'?: string | undefined
            'next-token'?: string | undefined
            'max-results'?: number | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListAccountsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/app-instances': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Name: string
            Metadata?: string | undefined
            ClientRequestToken: string
            Tags?: Tag[] | undefined
          }
        }
        output: CreateAppInstanceResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            'max-results'?: number | undefined
            'next-token'?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListAppInstancesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/app-instances/:appInstanceArn/admins': {
      $post: {
        input: { param: { appInstanceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { AppInstanceAdminArn: string } }
        output: CreateAppInstanceAdminResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { appInstanceArn: string } } & {
          query: {
            'max-results'?: number | undefined
            'next-token'?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListAppInstanceAdminsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/app-instance-users': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            AppInstanceArn: string
            AppInstanceUserId: string
            Name: string
            Metadata?: string | undefined
            ClientRequestToken: string
            Tags?: Tag[] | undefined
          }
        }
        output: CreateAppInstanceUserResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/meetings/:meetingId/attendees': {
      $post: {
        input: { param: { meetingId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { ExternalUserId: string; Tags?: Tag[] | undefined } }
        output: CreateAttendeeResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { meetingId: string } } & {
          query: {
            'next-token'?: string | undefined
            'max-results'?: number | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListAttendeesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/bots': {
      $post: {
        input: { param: { accountId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { DisplayName: string; Domain?: string | undefined } }
        output: CreateBotResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { accountId: string } } & {
          query: {
            'max-results'?: number | undefined
            'next-token'?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListBotsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels': {
      $post: {
        input: {
          header: {
            'x-amz-chime-bearer'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            AppInstanceArn: string
            Name: string
            Mode?: 'UNRESTRICTED' | 'RESTRICTED' | undefined
            Privacy?: 'PUBLIC' | 'PRIVATE' | undefined
            Metadata?: string | undefined
            ClientRequestToken: string
            Tags?: Tag[] | undefined
          }
        }
        output: CreateChannelResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/channels/:channelArn/bans': {
      $post: {
        input: { param: { channelArn: string } } & {
          header: {
            'x-amz-chime-bearer'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { MemberArn: string } }
        output: CreateChannelBanResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { channelArn: string } } & {
          query: {
            'max-results'?: number | undefined
            'next-token'?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'x-amz-chime-bearer'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListChannelBansResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels/:channelArn/memberships': {
      $post: {
        input: { param: { channelArn: string } } & {
          header: {
            'x-amz-chime-bearer'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { MemberArn: string; Type: 'DEFAULT' | 'HIDDEN' } }
        output: CreateChannelMembershipResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { channelArn: string } } & {
          query: {
            type?: 'DEFAULT' | 'HIDDEN' | undefined
            'max-results'?: number | undefined
            'next-token'?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'x-amz-chime-bearer'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListChannelMembershipsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels/:channelArn/moderators': {
      $post: {
        input: { param: { channelArn: string } } & {
          header: {
            'x-amz-chime-bearer'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { ChannelModeratorArn: string } }
        output: CreateChannelModeratorResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { channelArn: string } } & {
          query: {
            'max-results'?: number | undefined
            'next-token'?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'x-amz-chime-bearer'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListChannelModeratorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/media-capture-pipelines': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            SourceType: 'ChimeSdkMeeting'
            SourceArn: string
            SinkType: 'S3Bucket'
            SinkArn: string
            ClientRequestToken?: string | undefined
            ChimeSdkMeetingConfiguration?:
              | {
                  SourceConfiguration?:
                    | {
                        SelectedVideoStreams?:
                          | { AttendeeIds?: {} | undefined; ExternalUserIds?: {} | undefined }
                          | undefined
                      }
                    | undefined
                  ArtifactsConfiguration?:
                    | {
                        Audio: { MuxType: {} }
                        Video: { State: {}; MuxType?: {} | undefined }
                        Content: { State: {}; MuxType?: {} | undefined }
                      }
                    | undefined
                }
              | undefined
          }
        }
        output: CreateMediaCapturePipelineResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            'next-token'?: string | undefined
            'max-results'?: number | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListMediaCapturePipelinesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/meetings': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            ClientRequestToken: string
            ExternalMeetingId?: string | undefined
            MeetingHostId?: string | undefined
            MediaRegion?: string | undefined
            Tags?: Tag[] | undefined
            NotificationsConfiguration?:
              | { SnsTopicArn?: {} | undefined; SqsQueueArn?: {} | undefined }
              | undefined
          }
        }
        output: CreateMeetingResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            'next-token'?: string | undefined
            'max-results'?: number | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListMeetingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/meetings/:meetingId/dial-outs': {
      $post: {
        input: { param: { meetingId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { FromPhoneNumber: string; ToPhoneNumber: string; JoinToken: string } }
        output: CreateMeetingDialOutResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/meetings#operation=create-attendees': {
      $post: {
        input: { query: { operation: 'create-attendees' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            ClientRequestToken: string
            ExternalMeetingId?: string | undefined
            MeetingHostId?: string | undefined
            MediaRegion?: string | undefined
            Tags?: Tag[] | undefined
            NotificationsConfiguration?:
              | { SnsTopicArn?: {} | undefined; SqsQueueArn?: {} | undefined }
              | undefined
            Attendees?: CreateAttendeeRequestItem[] | undefined
          }
        }
        output: CreateMeetingWithAttendeesResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/phone-number-orders': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            ProductType: 'BusinessCalling' | 'VoiceConnector' | 'SipMediaApplicationDialIn'
            E164PhoneNumbers: E164PhoneNumber[]
          }
        }
        output: CreatePhoneNumberOrderResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            'next-token'?: string | undefined
            'max-results'?: number | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListPhoneNumberOrdersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/voice-connectors/:voiceConnectorId/proxy-sessions': {
      $post: {
        input: { param: { voiceConnectorId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            ParticipantPhoneNumbers: E164PhoneNumber[]
            Name?: string | undefined
            ExpiryMinutes?: number | undefined
            Capabilities: Capability[]
            NumberSelectionBehavior?: 'PreferSticky' | 'AvoidSticky' | undefined
            GeoMatchLevel?: 'Country' | 'AreaCode' | undefined
            GeoMatchParams?: { Country?: {} | undefined; AreaCode?: {} | undefined } | undefined
          }
        }
        output: CreateProxySessionResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { voiceConnectorId: string } } & {
          query: {
            status?: 'Open' | 'InProgress' | 'Closed' | undefined
            'next-token'?: string | undefined
            'max-results'?: number | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListProxySessionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/rooms': {
      $post: {
        input: { param: { accountId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Name: string; ClientRequestToken?: string | undefined } }
        output: CreateRoomResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { accountId: string } } & {
          query: {
            'member-id'?: string | undefined
            'max-results'?: number | undefined
            'next-token'?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListRoomsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/rooms/:roomId/memberships': {
      $post: {
        input: { param: { accountId: string; roomId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { MemberId: string; Role?: 'Administrator' | 'Member' | undefined } }
        output: CreateRoomMembershipResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { accountId: string; roomId: string } } & {
          query: {
            'max-results'?: number | undefined
            'next-token'?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListRoomMembershipsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sip-media-applications': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { AwsRegion: string; Name: string; Endpoints: SipMediaApplicationEndpoint[] } }
        output: CreateSipMediaApplicationResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            'max-results'?: number | undefined
            'next-token'?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListSipMediaApplicationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sip-media-applications/:sipMediaApplicationId/calls': {
      $post: {
        input: { param: { sipMediaApplicationId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            FromPhoneNumber: string
            ToPhoneNumber: string
            SipHeaders?: { [x: string]: SensitiveString } | undefined
          }
        }
        output: CreateSipMediaApplicationCallResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/sip-rules': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Name: string
            TriggerType: 'ToPhoneNumber' | 'RequestUriHostname'
            TriggerValue: string
            Disabled?: boolean | undefined
            TargetApplications: SipRuleTargetApplication[]
          }
        }
        output: CreateSipRuleResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            'sip-media-application'?: string | undefined
            'max-results'?: number | undefined
            'next-token'?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListSipRulesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/users#operation=create': {
      $post: {
        input: { param: { accountId: string } } & { query: { operation: 'create' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Username?: string | undefined
            Email?: string | undefined
            UserType?: 'PrivateUser' | 'SharedDevice' | undefined
          }
        }
        output: CreateUserResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/voice-connectors': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Name: string
            AwsRegion?: 'us-east-1' | 'us-west-2' | undefined
            RequireEncryption: boolean
          }
        }
        output: CreateVoiceConnectorResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            'next-token'?: string | undefined
            'max-results'?: number | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListVoiceConnectorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/voice-connector-groups': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Name: string; VoiceConnectorItems?: VoiceConnectorItem[] | undefined } }
        output: CreateVoiceConnectorGroupResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            'next-token'?: string | undefined
            'max-results'?: number | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListVoiceConnectorGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId': {
      $delete: {
        input: { param: { accountId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteAccountResponse
        outputFormat: 'json'
        status: 204
      }
      $get: {
        input: { param: { accountId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetAccountResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { accountId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Name?: string | undefined
            DefaultLicense?: 'Basic' | 'Plus' | 'Pro' | 'ProTrial' | undefined
          }
        }
        output: UpdateAccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/app-instances/:appInstanceArn': {
      $delete: {
        input: { param: { appInstanceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { appInstanceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeAppInstanceResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { appInstanceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Name: string; Metadata?: string | undefined } }
        output: UpdateAppInstanceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/app-instances/:appInstanceArn/admins/:appInstanceAdminArn': {
      $delete: {
        input: { param: { appInstanceAdminArn: string; appInstanceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { appInstanceAdminArn: string; appInstanceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeAppInstanceAdminResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/app-instances/:appInstanceArn/streaming-configurations': {
      $delete: {
        input: { param: { appInstanceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { appInstanceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetAppInstanceStreamingConfigurationsResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { appInstanceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { AppInstanceStreamingConfigurations: AppInstanceStreamingConfiguration[] } }
        output: PutAppInstanceStreamingConfigurationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/app-instance-users/:appInstanceUserArn': {
      $delete: {
        input: { param: { appInstanceUserArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { appInstanceUserArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeAppInstanceUserResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { appInstanceUserArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Name: string; Metadata?: string | undefined } }
        output: UpdateAppInstanceUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/meetings/:meetingId/attendees/:attendeeId': {
      $delete: {
        input: { param: { meetingId: string; attendeeId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { meetingId: string; attendeeId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetAttendeeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels/:channelArn': {
      $delete: {
        input: { param: { channelArn: string } } & {
          header: {
            'x-amz-chime-bearer'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { channelArn: string } } & {
          header: {
            'x-amz-chime-bearer'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeChannelResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { channelArn: string } } & {
          header: {
            'x-amz-chime-bearer'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: { Name: string; Mode: 'UNRESTRICTED' | 'RESTRICTED'; Metadata?: string | undefined }
        }
        output: UpdateChannelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels/:channelArn/bans/:memberArn': {
      $delete: {
        input: { param: { channelArn: string; memberArn: string } } & {
          header: {
            'x-amz-chime-bearer'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { channelArn: string; memberArn: string } } & {
          header: {
            'x-amz-chime-bearer'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeChannelBanResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels/:channelArn/memberships/:memberArn': {
      $delete: {
        input: { param: { channelArn: string; memberArn: string } } & {
          header: {
            'x-amz-chime-bearer'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { channelArn: string; memberArn: string } } & {
          header: {
            'x-amz-chime-bearer'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeChannelMembershipResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels/:channelArn/messages/:messageId': {
      $delete: {
        input: { param: { channelArn: string; messageId: string } } & {
          header: {
            'x-amz-chime-bearer'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { channelArn: string; messageId: string } } & {
          header: {
            'x-amz-chime-bearer'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetChannelMessageResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { channelArn: string; messageId: string } } & {
          header: {
            'x-amz-chime-bearer'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Content?: string | undefined; Metadata?: string | undefined } }
        output: UpdateChannelMessageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels/:channelArn/moderators/:channelModeratorArn': {
      $delete: {
        input: { param: { channelArn: string; channelModeratorArn: string } } & {
          header: {
            'x-amz-chime-bearer'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { channelArn: string; channelModeratorArn: string } } & {
          header: {
            'x-amz-chime-bearer'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeChannelModeratorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/bots/:botId/events-configuration': {
      $delete: {
        input: { param: { accountId: string; botId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { accountId: string; botId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetEventsConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { accountId: string; botId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            OutboundEventsHTTPSEndpoint?: string | undefined
            LambdaFunctionArn?: string | undefined
          }
        }
        output: PutEventsConfigurationResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/media-capture-pipelines/:mediaPipelineId': {
      $delete: {
        input: { param: { mediaPipelineId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { mediaPipelineId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetMediaCapturePipelineResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/meetings/:meetingId': {
      $delete: {
        input: { param: { meetingId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { meetingId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetMeetingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/phone-numbers/:phoneNumberId': {
      $delete: {
        input: { param: { phoneNumberId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { phoneNumberId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetPhoneNumberResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { phoneNumberId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            ProductType?:
              | 'BusinessCalling'
              | 'VoiceConnector'
              | 'SipMediaApplicationDialIn'
              | undefined
            CallingName?: string | undefined
          }
        }
        output: UpdatePhoneNumberResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/voice-connectors/:voiceConnectorId/proxy-sessions/:proxySessionId': {
      $delete: {
        input: { param: { voiceConnectorId: string; proxySessionId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { voiceConnectorId: string; proxySessionId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetProxySessionResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { voiceConnectorId: string; proxySessionId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Capabilities: Capability[]; ExpiryMinutes?: number | undefined } }
        output: UpdateProxySessionResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/accounts/:accountId/rooms/:roomId': {
      $delete: {
        input: { param: { accountId: string; roomId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { accountId: string; roomId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetRoomResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { accountId: string; roomId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Name?: string | undefined } }
        output: UpdateRoomResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/rooms/:roomId/memberships/:memberId': {
      $delete: {
        input: { param: { accountId: string; roomId: string; memberId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $post: {
        input: { param: { accountId: string; roomId: string; memberId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Role?: 'Administrator' | 'Member' | undefined } }
        output: UpdateRoomMembershipResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sip-media-applications/:sipMediaApplicationId': {
      $delete: {
        input: { param: { sipMediaApplicationId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { sipMediaApplicationId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetSipMediaApplicationResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { sipMediaApplicationId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: { Name?: string | undefined; Endpoints?: SipMediaApplicationEndpoint[] | undefined }
        }
        output: UpdateSipMediaApplicationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sip-rules/:sipRuleId': {
      $delete: {
        input: { param: { sipRuleId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { sipRuleId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetSipRuleResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { sipRuleId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Name: string
            Disabled?: boolean | undefined
            TargetApplications?: SipRuleTargetApplication[] | undefined
          }
        }
        output: UpdateSipRuleResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/voice-connectors/:voiceConnectorId': {
      $delete: {
        input: { param: { voiceConnectorId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { voiceConnectorId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetVoiceConnectorResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { voiceConnectorId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Name: string; RequireEncryption: boolean } }
        output: UpdateVoiceConnectorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/voice-connectors/:voiceConnectorId/emergency-calling-configuration': {
      $delete: {
        input: { param: { voiceConnectorId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { voiceConnectorId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetVoiceConnectorEmergencyCallingConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { voiceConnectorId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { EmergencyCallingConfiguration: { DNIS?: {} | undefined } } }
        output: PutVoiceConnectorEmergencyCallingConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/voice-connector-groups/:voiceConnectorGroupId': {
      $delete: {
        input: { param: { voiceConnectorGroupId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { voiceConnectorGroupId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetVoiceConnectorGroupResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { voiceConnectorGroupId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Name: string; VoiceConnectorItems: VoiceConnectorItem[] } }
        output: UpdateVoiceConnectorGroupResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/voice-connectors/:voiceConnectorId/origination': {
      $delete: {
        input: { param: { voiceConnectorId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { voiceConnectorId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetVoiceConnectorOriginationResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { voiceConnectorId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Origination: { Routes?: {} | undefined; Disabled?: {} | undefined } } }
        output: PutVoiceConnectorOriginationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/voice-connectors/:voiceConnectorId/programmable-numbers/proxy': {
      $delete: {
        input: { param: { voiceConnectorId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { voiceConnectorId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetVoiceConnectorProxyResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { voiceConnectorId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            DefaultSessionExpiryMinutes: number
            PhoneNumberPoolCountries: Country[]
            FallBackPhoneNumber?: string | undefined
            Disabled?: boolean | undefined
          }
        }
        output: PutVoiceConnectorProxyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/voice-connectors/:voiceConnectorId/streaming-configuration': {
      $delete: {
        input: { param: { voiceConnectorId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { voiceConnectorId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetVoiceConnectorStreamingConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { voiceConnectorId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            StreamingConfiguration: {
              DataRetentionInHours?: {} | undefined
              Disabled?: {} | undefined
              StreamingNotificationTargets?: {} | undefined
            }
          }
        }
        output: PutVoiceConnectorStreamingConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/voice-connectors/:voiceConnectorId/termination': {
      $delete: {
        input: { param: { voiceConnectorId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { voiceConnectorId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetVoiceConnectorTerminationResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { voiceConnectorId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Termination: {
              CpsLimit?: {} | undefined
              DefaultPhoneNumber?: {} | undefined
              CallingRegions?: {} | undefined
              CidrAllowedList?: {} | undefined
              Disabled?: {} | undefined
            }
          }
        }
        output: PutVoiceConnectorTerminationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/voice-connectors/:voiceConnectorId/termination/credentials#operation=delete': {
      $post: {
        input: { param: { voiceConnectorId: string } } & { query: { operation: 'delete' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Usernames: SensitiveString[] } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/channels/:channelArn#scope=app-instance-user-membership&app-instance-user-arn': {
      $get: {
        input: { param: { channelArn: string } } & {
          query: { 'app-instance-user-arn': string; scope: 'app-instance-user-membership' }
        } & {
          header: {
            'x-amz-chime-bearer'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeChannelMembershipForAppInstanceUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels/:channelArn#scope=app-instance-user-moderated-channel&app-instance-user-arn': {
      $get: {
        input: { param: { channelArn: string } } & {
          query: { 'app-instance-user-arn': string; scope: 'app-instance-user-moderated-channel' }
        } & {
          header: {
            'x-amz-chime-bearer'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeChannelModeratedByAppInstanceUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/users/:userId#operation=disassociate-phone-number': {
      $post: {
        input: { param: { accountId: string; userId: string } } & {
          query: { operation: 'disassociate-phone-number' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DisassociatePhoneNumberFromUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/voice-connectors/:voiceConnectorId#operation=disassociate-phone-numbers': {
      $post: {
        input: { param: { voiceConnectorId: string } } & {
          query: { operation: 'disassociate-phone-numbers' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { E164PhoneNumbers: E164PhoneNumber[] } }
        output: DisassociatePhoneNumbersFromVoiceConnectorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/voice-connector-groups/:voiceConnectorGroupId#operation=disassociate-phone-numbers': {
      $post: {
        input: { param: { voiceConnectorGroupId: string } } & {
          query: { operation: 'disassociate-phone-numbers' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { E164PhoneNumbers: E164PhoneNumber[] } }
        output: DisassociatePhoneNumbersFromVoiceConnectorGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId#operation=disassociate-signin-delegate-groups': {
      $post: {
        input: { param: { accountId: string } } & {
          query: { operation: 'disassociate-signin-delegate-groups' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { GroupNames: String[] } }
        output: DisassociateSigninDelegateGroupsFromAccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/settings': {
      $get: {
        input: { param: { accountId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetAccountSettingsResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { accountId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            AccountSettings: {
              DisableRemoteControl?: {} | undefined
              EnableDialOut?: {} | undefined
            }
          }
        }
        output: UpdateAccountSettingsResponse
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/app-instances/:appInstanceArn/retention-settings': {
      $get: {
        input: { param: { appInstanceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetAppInstanceRetentionSettingsResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { appInstanceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            AppInstanceRetentionSettings: {
              ChannelRetentionSettings?: { RetentionDays?: {} | undefined } | undefined
            }
          }
        }
        output: PutAppInstanceRetentionSettingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/bots/:botId': {
      $get: {
        input: { param: { accountId: string; botId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetBotResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { accountId: string; botId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Disabled?: boolean | undefined } }
        output: UpdateBotResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings': {
      $get: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetGlobalSettingsResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            BusinessCalling?: { CdrBucket?: {} | undefined } | undefined
            VoiceConnector?: { CdrBucket?: {} | undefined } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/endpoints/messaging-session': {
      $get: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetMessagingSessionEndpointResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/phone-number-orders/:phoneNumberOrderId': {
      $get: {
        input: { param: { phoneNumberOrderId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetPhoneNumberOrderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/phone-number': {
      $get: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetPhoneNumberSettingsResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { CallingName: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/accounts/:accountId/retention-settings': {
      $get: {
        input: { param: { accountId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetRetentionSettingsResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { accountId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            RetentionSettings: {
              RoomRetentionSettings?: { RetentionDays?: {} | undefined } | undefined
              ConversationRetentionSettings?: { RetentionDays?: {} | undefined } | undefined
            }
          }
        }
        output: PutRetentionSettingsResponse
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/sip-media-applications/:sipMediaApplicationId/logging-configuration': {
      $get: {
        input: { param: { sipMediaApplicationId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetSipMediaApplicationLoggingConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { sipMediaApplicationId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            SipMediaApplicationLoggingConfiguration?:
              | { EnableSipMediaApplicationMessageLogs?: {} | undefined }
              | undefined
          }
        }
        output: PutSipMediaApplicationLoggingConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/users/:userId': {
      $get: {
        input: { param: { accountId: string; userId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetUserResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { accountId: string; userId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            LicenseType?: 'Basic' | 'Plus' | 'Pro' | 'ProTrial' | undefined
            UserType?: 'PrivateUser' | 'SharedDevice' | undefined
            AlexaForBusinessMetadata?:
              | {
                  IsAlexaForBusinessEnabled?: {} | undefined
                  AlexaForBusinessRoomArn?: {} | undefined
                }
              | undefined
          }
        }
        output: UpdateUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/users/:userId/settings': {
      $get: {
        input: { param: { accountId: string; userId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetUserSettingsResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { accountId: string; userId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            UserSettings: {
              Telephony?: { InboundCalling: {}; OutboundCalling: {}; SMS: {} } | undefined
            }
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/voice-connectors/:voiceConnectorId/logging-configuration': {
      $get: {
        input: { param: { voiceConnectorId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetVoiceConnectorLoggingConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { voiceConnectorId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            LoggingConfiguration: {
              EnableSIPLogs?: {} | undefined
              EnableMediaMetricLogs?: {} | undefined
            }
          }
        }
        output: PutVoiceConnectorLoggingConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/voice-connectors/:voiceConnectorId/termination/health': {
      $get: {
        input: { param: { voiceConnectorId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetVoiceConnectorTerminationHealthResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/users#operation=add': {
      $post: {
        input: { param: { accountId: string } } & { query: { operation: 'add' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            UserEmailList: EmailAddress[]
            UserType?: 'PrivateUser' | 'SharedDevice' | undefined
          }
        }
        output: InviteUsersResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/app-instance-users#app-instance-arn': {
      $get: {
        input: {
          query: {
            'app-instance-arn': string
            'max-results'?: number | undefined
            'next-token'?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListAppInstanceUsersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/meetings/:meetingId/attendees/:attendeeId/tags': {
      $get: {
        input: { param: { meetingId: string; attendeeId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListAttendeeTagsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels#scope=app-instance-user-memberships': {
      $get: {
        input: {
          query: {
            'app-instance-user-arn'?: string | undefined
            'max-results'?: number | undefined
            'next-token'?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
            scope: 'app-instance-user-memberships'
          }
        } & {
          header: {
            'x-amz-chime-bearer'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListChannelMembershipsForAppInstanceUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels/:channelArn/messages': {
      $get: {
        input: { param: { channelArn: string } } & {
          query: {
            'sort-order'?: 'ASCENDING' | 'DESCENDING' | undefined
            'not-before'?: string | undefined
            'not-after'?: string | undefined
            'max-results'?: number | undefined
            'next-token'?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'x-amz-chime-bearer'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListChannelMessagesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { channelArn: string } } & {
          header: {
            'x-amz-chime-bearer'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Content: string
            Type: 'STANDARD' | 'CONTROL'
            Persistence: 'PERSISTENT' | 'NON_PERSISTENT'
            Metadata?: string | undefined
            ClientRequestToken: string
          }
        }
        output: SendChannelMessageResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/channels#app-instance-arn': {
      $get: {
        input: {
          query: {
            'app-instance-arn': string
            privacy?: 'PUBLIC' | 'PRIVATE' | undefined
            'max-results'?: number | undefined
            'next-token'?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'x-amz-chime-bearer'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListChannelsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels#scope=app-instance-user-moderated-channels': {
      $get: {
        input: {
          query: {
            'app-instance-user-arn'?: string | undefined
            'max-results'?: number | undefined
            'next-token'?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
            scope: 'app-instance-user-moderated-channels'
          }
        } & {
          header: {
            'x-amz-chime-bearer'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListChannelsModeratedByAppInstanceUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/meetings/:meetingId/tags': {
      $get: {
        input: { param: { meetingId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListMeetingTagsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/phone-numbers': {
      $get: {
        input: {
          query: {
            status?:
              | 'AcquireInProgress'
              | 'AcquireFailed'
              | 'Unassigned'
              | 'Assigned'
              | 'ReleaseInProgress'
              | 'DeleteInProgress'
              | 'ReleaseFailed'
              | 'DeleteFailed'
              | undefined
            'product-type'?:
              | 'BusinessCalling'
              | 'VoiceConnector'
              | 'SipMediaApplicationDialIn'
              | undefined
            'filter-name'?:
              | 'AccountId'
              | 'UserId'
              | 'VoiceConnectorId'
              | 'VoiceConnectorGroupId'
              | 'SipRuleId'
              | undefined
            'filter-value'?: string | undefined
            'max-results'?: number | undefined
            'next-token'?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListPhoneNumbersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/phone-number-countries#product-type': {
      $get: {
        input: {
          query: {
            'product-type': 'BusinessCalling' | 'VoiceConnector' | 'SipMediaApplicationDialIn'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListSupportedPhoneNumberCountriesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags#arn': {
      $get: {
        input: { query: { arn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/voice-connectors/:voiceConnectorId/termination/credentials': {
      $get: {
        input: { param: { voiceConnectorId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListVoiceConnectorTerminationCredentialsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/users/:userId#operation=logout': {
      $post: {
        input: { param: { accountId: string; userId: string } } & {
          query: { operation: 'logout' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: LogoutUserResponse
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/voice-connectors/:voiceConnectorId/termination/credentials#operation=put': {
      $post: {
        input: { param: { voiceConnectorId: string } } & { query: { operation: 'put' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Credentials?: Credential[] | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/channels/:channelArn/messages/:messageId#operation=redact': {
      $post: {
        input: { param: { channelArn: string; messageId: string } } & {
          query: { operation: 'redact' }
        } & {
          header: {
            'x-amz-chime-bearer'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RedactChannelMessageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/conversations/:conversationId/messages/:messageId#operation=redact': {
      $post: {
        input: { param: { accountId: string; conversationId: string; messageId: string } } & {
          query: { operation: 'redact' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RedactConversationMessageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/rooms/:roomId/messages/:messageId#operation=redact': {
      $post: {
        input: { param: { accountId: string; roomId: string; messageId: string } } & {
          query: { operation: 'redact' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RedactRoomMessageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/bots/:botId#operation=regenerate-security-token': {
      $post: {
        input: { param: { accountId: string; botId: string } } & {
          query: { operation: 'regenerate-security-token' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RegenerateSecurityTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:accountId/users/:userId#operation=reset-personal-pin': {
      $post: {
        input: { param: { accountId: string; userId: string } } & {
          query: { operation: 'reset-personal-pin' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ResetPersonalPINResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/phone-numbers/:phoneNumberId#operation=restore': {
      $post: {
        input: { param: { phoneNumberId: string } } & { query: { operation: 'restore' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RestorePhoneNumberResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search#type=phone-numbers': {
      $get: {
        input: {
          query: {
            'area-code'?: string | undefined
            city?: string | undefined
            country?: string | undefined
            state?: string | undefined
            'toll-free-prefix'?: string | undefined
            'phone-number-type'?: 'Local' | 'TollFree' | undefined
            'max-results'?: number | undefined
            'next-token'?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
            type: 'phone-numbers'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: SearchAvailablePhoneNumbersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/meetings/:meetingId/transcription#operation=start': {
      $post: {
        input: { param: { meetingId: string } } & { query: { operation: 'start' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            TranscriptionConfiguration: {
              EngineTranscribeSettings?:
                | {
                    LanguageCode?: {} | undefined
                    VocabularyFilterMethod?: {} | undefined
                    VocabularyFilterName?: {} | undefined
                    VocabularyName?: {} | undefined
                    Region?: {} | undefined
                    EnablePartialResultsStabilization?: {} | undefined
                    PartialResultsStability?: {} | undefined
                    ContentIdentificationType?: {} | undefined
                    ContentRedactionType?: {} | undefined
                    PiiEntityTypes?: {} | undefined
                    LanguageModelName?: {} | undefined
                    IdentifyLanguage?: {} | undefined
                    LanguageOptions?: {} | undefined
                    PreferredLanguage?: {} | undefined
                    VocabularyNames?: {} | undefined
                    VocabularyFilterNames?: {} | undefined
                  }
                | undefined
              EngineTranscribeMedicalSettings?:
                | {
                    LanguageCode: {}
                    Specialty: {}
                    Type: {}
                    VocabularyName?: {} | undefined
                    Region?: {} | undefined
                    ContentIdentificationType?: {} | undefined
                  }
                | undefined
            }
          }
        }
        output: StartMeetingTranscriptionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/meetings/:meetingId/transcription#operation=stop': {
      $post: {
        input: { param: { meetingId: string } } & { query: { operation: 'stop' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: StopMeetingTranscriptionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/meetings/:meetingId/attendees/:attendeeId/tags#operation=add': {
      $post: {
        input: { param: { meetingId: string; attendeeId: string } } & {
          query: { operation: 'add' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Tags: Tag[] } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/meetings/:meetingId/tags#operation=add': {
      $post: {
        input: { param: { meetingId: string } } & { query: { operation: 'add' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Tags: Tag[] } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/tags#operation=tag-resource': {
      $post: {
        input: { query: { operation: 'tag-resource' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { ResourceARN: string; Tags: Tag[] } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/meetings/:meetingId/attendees/:attendeeId/tags#operation=delete': {
      $post: {
        input: { param: { meetingId: string; attendeeId: string } } & {
          query: { operation: 'delete' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { TagKeys: TagKey[] } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/meetings/:meetingId/tags#operation=delete': {
      $post: {
        input: { param: { meetingId: string } } & { query: { operation: 'delete' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { TagKeys: TagKey[] } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/tags#operation=untag-resource': {
      $post: {
        input: { query: { operation: 'untag-resource' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { ResourceARN: string; TagKeys: TagKey[] } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/channels/:channelArn/readMarker': {
      $put: {
        input: { param: { channelArn: string } } & {
          header: {
            'x-amz-chime-bearer'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: UpdateChannelReadMarkerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sip-media-applications/:sipMediaApplicationId/calls/:transactionId': {
      $post: {
        input: { param: { sipMediaApplicationId: string; transactionId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Arguments: { [x: string]: SensitiveString } } }
        output: UpdateSipMediaApplicationCallResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/emergency-calling/address': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            AwsAccountId: string
            StreetNumber: string
            StreetInfo: string
            City: string
            State: string
            Country: string
            PostalCode: string
          }
        }
        output: ValidateE911AddressResponse
        outputFormat: 'json'
        status: 202
      }
    }
  },
  '/'
>
export default routes
