type ApplicationResponse = {
  Arn: {}
  Id: {}
  Name: {}
  tags?: {} | undefined
  CreationDate?: {} | undefined
}
type CreateAppResponse = { ApplicationResponse: ApplicationResponse }
type ApplicationsResponse = { Item?: {} | undefined; NextToken?: {} | undefined }
type GetAppsResponse = { ApplicationsResponse: ApplicationsResponse }
type CampaignResponse = {
  AdditionalTreatments?: {} | undefined
  ApplicationId: {}
  Arn: {}
  CreationDate: {}
  CustomDeliveryConfiguration?: { DeliveryUri: {}; EndpointTypes?: {} | undefined } | undefined
  DefaultState?: { CampaignStatus?: {} | undefined } | undefined
  Description?: {} | undefined
  HoldoutPercent?: {} | undefined
  Hook?:
    | { LambdaFunctionName?: {} | undefined; Mode?: {} | undefined; WebUrl?: {} | undefined }
    | undefined
  Id: {}
  IsPaused?: {} | undefined
  LastModifiedDate: {}
  Limits?:
    | {
        Daily?: {} | undefined
        MaximumDuration?: {} | undefined
        MessagesPerSecond?: {} | undefined
        Total?: {} | undefined
        Session?: {} | undefined
      }
    | undefined
  MessageConfiguration?:
    | {
        ADMMessage?:
          | {
              Action?: {} | undefined
              Body?: {} | undefined
              ImageIconUrl?: {} | undefined
              ImageSmallIconUrl?: {} | undefined
              ImageUrl?: {} | undefined
              JsonBody?: {} | undefined
              MediaUrl?: {} | undefined
              RawContent?: {} | undefined
              SilentPush?: {} | undefined
              TimeToLive?: {} | undefined
              Title?: {} | undefined
              Url?: {} | undefined
            }
          | undefined
        APNSMessage?:
          | {
              Action?: {} | undefined
              Body?: {} | undefined
              ImageIconUrl?: {} | undefined
              ImageSmallIconUrl?: {} | undefined
              ImageUrl?: {} | undefined
              JsonBody?: {} | undefined
              MediaUrl?: {} | undefined
              RawContent?: {} | undefined
              SilentPush?: {} | undefined
              TimeToLive?: {} | undefined
              Title?: {} | undefined
              Url?: {} | undefined
            }
          | undefined
        BaiduMessage?:
          | {
              Action?: {} | undefined
              Body?: {} | undefined
              ImageIconUrl?: {} | undefined
              ImageSmallIconUrl?: {} | undefined
              ImageUrl?: {} | undefined
              JsonBody?: {} | undefined
              MediaUrl?: {} | undefined
              RawContent?: {} | undefined
              SilentPush?: {} | undefined
              TimeToLive?: {} | undefined
              Title?: {} | undefined
              Url?: {} | undefined
            }
          | undefined
        CustomMessage?: { Data?: {} | undefined } | undefined
        DefaultMessage?:
          | {
              Action?: {} | undefined
              Body?: {} | undefined
              ImageIconUrl?: {} | undefined
              ImageSmallIconUrl?: {} | undefined
              ImageUrl?: {} | undefined
              JsonBody?: {} | undefined
              MediaUrl?: {} | undefined
              RawContent?: {} | undefined
              SilentPush?: {} | undefined
              TimeToLive?: {} | undefined
              Title?: {} | undefined
              Url?: {} | undefined
            }
          | undefined
        EmailMessage?:
          | {
              Body?: {} | undefined
              FromAddress?: {} | undefined
              HtmlBody?: {} | undefined
              Title?: {} | undefined
            }
          | undefined
        GCMMessage?:
          | {
              Action?: {} | undefined
              Body?: {} | undefined
              ImageIconUrl?: {} | undefined
              ImageSmallIconUrl?: {} | undefined
              ImageUrl?: {} | undefined
              JsonBody?: {} | undefined
              MediaUrl?: {} | undefined
              RawContent?: {} | undefined
              SilentPush?: {} | undefined
              TimeToLive?: {} | undefined
              Title?: {} | undefined
              Url?: {} | undefined
            }
          | undefined
        SMSMessage?:
          | {
              Body?: {} | undefined
              MessageType?: {} | undefined
              OriginationNumber?: {} | undefined
              SenderId?: {} | undefined
              EntityId?: {} | undefined
              TemplateId?: {} | undefined
            }
          | undefined
        InAppMessage?:
          | {
              Body?: {} | undefined
              Content?: {} | undefined
              CustomConfig?: {} | undefined
              Layout?: {} | undefined
            }
          | undefined
      }
    | undefined
  Name?: {} | undefined
  Schedule?:
    | {
        EndTime?: {} | undefined
        EventFilter?:
          | {
              Dimensions: {
                Attributes?: {} | undefined
                EventType?: { DimensionType?: {} | undefined; Values: {} } | undefined
                Metrics?: {} | undefined
              }
              FilterType: {}
            }
          | undefined
        Frequency?: {} | undefined
        IsLocalTime?: {} | undefined
        QuietTime?: { End?: {} | undefined; Start?: {} | undefined } | undefined
        StartTime: {}
        Timezone?: {} | undefined
      }
    | undefined
  SegmentId: {}
  SegmentVersion: {}
  State?: { CampaignStatus?: {} | undefined } | undefined
  tags?: {} | undefined
  TemplateConfiguration?:
    | {
        EmailTemplate?: { Name?: {} | undefined; Version?: {} | undefined } | undefined
        PushTemplate?: { Name?: {} | undefined; Version?: {} | undefined } | undefined
        SMSTemplate?: { Name?: {} | undefined; Version?: {} | undefined } | undefined
        VoiceTemplate?: { Name?: {} | undefined; Version?: {} | undefined } | undefined
      }
    | undefined
  TreatmentDescription?: {} | undefined
  TreatmentName?: {} | undefined
  Version?: {} | undefined
  Priority?: {} | undefined
}
type CreateCampaignResponse = { CampaignResponse: CampaignResponse }
type CampaignsResponse = { Item: {}; NextToken?: {} | undefined }
type GetCampaignsResponse = { CampaignsResponse: CampaignsResponse }
type CreateTemplateMessageBody = {
  Arn?: {} | undefined
  Message?: {} | undefined
  RequestID?: {} | undefined
}
type CreateEmailTemplateResponse = { CreateTemplateMessageBody: CreateTemplateMessageBody }
type MessageBody = { Message?: {} | undefined; RequestID?: {} | undefined }
type DeleteEmailTemplateResponse = { MessageBody: MessageBody }
type EmailTemplateResponse = {
  Arn?: {} | undefined
  CreationDate: {}
  DefaultSubstitutions?: {} | undefined
  HtmlPart?: {} | undefined
  LastModifiedDate: {}
  RecommenderId?: {} | undefined
  Subject?: {} | undefined
  tags?: {} | undefined
  TemplateDescription?: {} | undefined
  TemplateName: {}
  TemplateType: {}
  TextPart?: {} | undefined
  Version?: {} | undefined
}
type GetEmailTemplateResponse = { EmailTemplateResponse: EmailTemplateResponse }
type UpdateEmailTemplateResponse = { MessageBody: MessageBody }
type ExportJobResponse = {
  ApplicationId: {}
  CompletedPieces?: {} | undefined
  CompletionDate?: {} | undefined
  CreationDate: {}
  Definition: {
    RoleArn: {}
    S3UrlPrefix: {}
    SegmentId?: {} | undefined
    SegmentVersion?: {} | undefined
  }
  FailedPieces?: {} | undefined
  Failures?: {} | undefined
  Id: {}
  JobStatus: {}
  TotalFailures?: {} | undefined
  TotalPieces?: {} | undefined
  TotalProcessed?: {} | undefined
  Type: {}
}
type CreateExportJobResponse = { ExportJobResponse: ExportJobResponse }
type ExportJobsResponse = { Item: {}; NextToken?: {} | undefined }
type GetExportJobsResponse = { ExportJobsResponse: ExportJobsResponse }
type ImportJobResponse = {
  ApplicationId: {}
  CompletedPieces?: {} | undefined
  CompletionDate?: {} | undefined
  CreationDate: {}
  Definition: {
    DefineSegment?: {} | undefined
    ExternalId?: {} | undefined
    Format: {}
    RegisterEndpoints?: {} | undefined
    RoleArn: {}
    S3Url: {}
    SegmentId?: {} | undefined
    SegmentName?: {} | undefined
  }
  FailedPieces?: {} | undefined
  Failures?: {} | undefined
  Id: {}
  JobStatus: {}
  TotalFailures?: {} | undefined
  TotalPieces?: {} | undefined
  TotalProcessed?: {} | undefined
  Type: {}
}
type CreateImportJobResponse = { ImportJobResponse: ImportJobResponse }
type ImportJobsResponse = { Item: {}; NextToken?: {} | undefined }
type GetImportJobsResponse = { ImportJobsResponse: ImportJobsResponse }
type TemplateCreateMessageBody = {
  Arn?: {} | undefined
  Message?: {} | undefined
  RequestID?: {} | undefined
}
type CreateInAppTemplateResponse = { TemplateCreateMessageBody: TemplateCreateMessageBody }
type DeleteInAppTemplateResponse = { MessageBody: MessageBody }
type InAppTemplateResponse = {
  Arn?: {} | undefined
  Content?: {} | undefined
  CreationDate: {}
  CustomConfig?: {} | undefined
  LastModifiedDate: {}
  Layout?: {} | undefined
  tags?: {} | undefined
  TemplateDescription?: {} | undefined
  TemplateName: {}
  TemplateType: {}
  Version?: {} | undefined
}
type GetInAppTemplateResponse = { InAppTemplateResponse: InAppTemplateResponse }
type UpdateInAppTemplateResponse = { MessageBody: MessageBody }
type EventFilter = {
  Dimensions: {
    Attributes?: {} | undefined
    EventType?: { DimensionType?: {} | undefined; Values: {} } | undefined
    Metrics?: {} | undefined
  }
  FilterType: {}
}
type String = string
type EventStartCondition = { EventFilter?: EventFilter | undefined; SegmentId?: String | undefined }
type JourneyResponse = {
  Activities?: {} | undefined
  ApplicationId: {}
  CreationDate?: {} | undefined
  Id: {}
  LastModifiedDate?: {} | undefined
  Limits?:
    | {
        DailyCap?: {} | undefined
        EndpointReentryCap?: {} | undefined
        MessagesPerSecond?: {} | undefined
        EndpointReentryInterval?: {} | undefined
      }
    | undefined
  LocalTime?: {} | undefined
  Name: {}
  QuietTime?: { End?: {} | undefined; Start?: {} | undefined } | undefined
  RefreshFrequency?: {} | undefined
  Schedule?:
    | { EndTime?: {} | undefined; StartTime?: {} | undefined; Timezone?: {} | undefined }
    | undefined
  StartActivity?: {} | undefined
  StartCondition?:
    | {
        Description?: {} | undefined
        EventStartCondition?: EventStartCondition | undefined
        SegmentStartCondition?: { SegmentId: {} } | undefined
      }
    | undefined
  State?: {} | undefined
  tags?: {} | undefined
  WaitForQuietTime?: {} | undefined
  RefreshOnSegmentUpdate?: {} | undefined
  JourneyChannelSettings?:
    | { ConnectCampaignArn?: {} | undefined; ConnectCampaignExecutionRoleArn?: {} | undefined }
    | undefined
  SendingSchedule?: {} | undefined
  OpenHours?:
    | {
        EMAIL?: {} | undefined
        SMS?: {} | undefined
        PUSH?: {} | undefined
        VOICE?: {} | undefined
        CUSTOM?: {} | undefined
      }
    | undefined
  ClosedDays?:
    | {
        EMAIL?: {} | undefined
        SMS?: {} | undefined
        PUSH?: {} | undefined
        VOICE?: {} | undefined
        CUSTOM?: {} | undefined
      }
    | undefined
}
type CreateJourneyResponse = { JourneyResponse: JourneyResponse }
type JourneysResponse = { Item: {}; NextToken?: {} | undefined }
type ListJourneysResponse = { JourneysResponse: JourneysResponse }
type CreatePushTemplateResponse = { CreateTemplateMessageBody: CreateTemplateMessageBody }
type DeletePushTemplateResponse = { MessageBody: MessageBody }
type PushNotificationTemplateResponse = {
  ADM?:
    | {
        Action?: {} | undefined
        Body?: {} | undefined
        ImageIconUrl?: {} | undefined
        ImageUrl?: {} | undefined
        RawContent?: {} | undefined
        SmallImageIconUrl?: {} | undefined
        Sound?: {} | undefined
        Title?: {} | undefined
        Url?: {} | undefined
      }
    | undefined
  APNS?:
    | {
        Action?: {} | undefined
        Body?: {} | undefined
        MediaUrl?: {} | undefined
        RawContent?: {} | undefined
        Sound?: {} | undefined
        Title?: {} | undefined
        Url?: {} | undefined
      }
    | undefined
  Arn?: {} | undefined
  Baidu?:
    | {
        Action?: {} | undefined
        Body?: {} | undefined
        ImageIconUrl?: {} | undefined
        ImageUrl?: {} | undefined
        RawContent?: {} | undefined
        SmallImageIconUrl?: {} | undefined
        Sound?: {} | undefined
        Title?: {} | undefined
        Url?: {} | undefined
      }
    | undefined
  CreationDate: {}
  Default?:
    | {
        Action?: {} | undefined
        Body?: {} | undefined
        Sound?: {} | undefined
        Title?: {} | undefined
        Url?: {} | undefined
      }
    | undefined
  DefaultSubstitutions?: {} | undefined
  GCM?:
    | {
        Action?: {} | undefined
        Body?: {} | undefined
        ImageIconUrl?: {} | undefined
        ImageUrl?: {} | undefined
        RawContent?: {} | undefined
        SmallImageIconUrl?: {} | undefined
        Sound?: {} | undefined
        Title?: {} | undefined
        Url?: {} | undefined
      }
    | undefined
  LastModifiedDate: {}
  RecommenderId?: {} | undefined
  tags?: {} | undefined
  TemplateDescription?: {} | undefined
  TemplateName: {}
  TemplateType: {}
  Version?: {} | undefined
}
type GetPushTemplateResponse = {
  PushNotificationTemplateResponse: PushNotificationTemplateResponse
}
type UpdatePushTemplateResponse = { MessageBody: MessageBody }
type RecommenderConfigurationResponse = {
  Attributes?: {} | undefined
  CreationDate: {}
  Description?: {} | undefined
  Id: {}
  LastModifiedDate: {}
  Name?: {} | undefined
  RecommendationProviderIdType?: {} | undefined
  RecommendationProviderRoleArn: {}
  RecommendationProviderUri: {}
  RecommendationTransformerUri?: {} | undefined
  RecommendationsDisplayName?: {} | undefined
  RecommendationsPerMessage?: {} | undefined
}
type CreateRecommenderConfigurationResponse = {
  RecommenderConfigurationResponse: RecommenderConfigurationResponse
}
type ListRecommenderConfigurationsResponse = { Item: {}; NextToken?: {} | undefined }
type GetRecommenderConfigurationsResponse = {
  ListRecommenderConfigurationsResponse: ListRecommenderConfigurationsResponse
}
type SegmentResponse = {
  ApplicationId: {}
  Arn: {}
  CreationDate: {}
  Dimensions?:
    | {
        Attributes?: {} | undefined
        Behavior?: { Recency?: { Duration: {}; RecencyType: {} } | undefined } | undefined
        Demographic?:
          | {
              AppVersion?: { DimensionType?: {} | undefined; Values: {} } | undefined
              Channel?: { DimensionType?: {} | undefined; Values: {} } | undefined
              DeviceType?: { DimensionType?: {} | undefined; Values: {} } | undefined
              Make?: { DimensionType?: {} | undefined; Values: {} } | undefined
              Model?: { DimensionType?: {} | undefined; Values: {} } | undefined
              Platform?: { DimensionType?: {} | undefined; Values: {} } | undefined
            }
          | undefined
        Location?:
          | {
              Country?: { DimensionType?: {} | undefined; Values: {} } | undefined
              GPSPoint?:
                | {
                    Coordinates: { Latitude: {}; Longitude: {} }
                    RangeInKilometers?: {} | undefined
                  }
                | undefined
            }
          | undefined
        Metrics?: {} | undefined
        UserAttributes?: {} | undefined
      }
    | undefined
  Id: {}
  ImportDefinition?:
    | {
        ChannelCounts?: {} | undefined
        ExternalId: {}
        Format: {}
        RoleArn: {}
        S3Url: {}
        Size: {}
      }
    | undefined
  LastModifiedDate?: {} | undefined
  Name?: {} | undefined
  SegmentGroups?: { Groups?: {} | undefined; Include?: {} | undefined } | undefined
  SegmentType: {}
  tags?: {} | undefined
  Version?: {} | undefined
}
type CreateSegmentResponse = { SegmentResponse: SegmentResponse }
type SegmentsResponse = { Item: {}; NextToken?: {} | undefined }
type GetSegmentsResponse = { SegmentsResponse: SegmentsResponse }
type CreateSmsTemplateResponse = { CreateTemplateMessageBody: CreateTemplateMessageBody }
type DeleteSmsTemplateResponse = { MessageBody: MessageBody }
type SMSTemplateResponse = {
  Arn?: {} | undefined
  Body?: {} | undefined
  CreationDate: {}
  DefaultSubstitutions?: {} | undefined
  LastModifiedDate: {}
  RecommenderId?: {} | undefined
  tags?: {} | undefined
  TemplateDescription?: {} | undefined
  TemplateName: {}
  TemplateType: {}
  Version?: {} | undefined
}
type GetSmsTemplateResponse = { SMSTemplateResponse: SMSTemplateResponse }
type UpdateSmsTemplateResponse = { MessageBody: MessageBody }
type CreateVoiceTemplateResponse = { CreateTemplateMessageBody: CreateTemplateMessageBody }
type DeleteVoiceTemplateResponse = { MessageBody: MessageBody }
type VoiceTemplateResponse = {
  Arn?: {} | undefined
  Body?: {} | undefined
  CreationDate: {}
  DefaultSubstitutions?: {} | undefined
  LanguageCode?: {} | undefined
  LastModifiedDate: {}
  tags?: {} | undefined
  TemplateDescription?: {} | undefined
  TemplateName: {}
  TemplateType: {}
  Version?: {} | undefined
  VoiceId?: {} | undefined
}
type GetVoiceTemplateResponse = { VoiceTemplateResponse: VoiceTemplateResponse }
type UpdateVoiceTemplateResponse = { MessageBody: MessageBody }
type ADMChannelResponse = {
  ApplicationId?: {} | undefined
  CreationDate?: {} | undefined
  Enabled?: {} | undefined
  HasCredential?: {} | undefined
  Id?: {} | undefined
  IsArchived?: {} | undefined
  LastModifiedBy?: {} | undefined
  LastModifiedDate?: {} | undefined
  Platform: {}
  Version?: {} | undefined
}
type DeleteAdmChannelResponse = { ADMChannelResponse: ADMChannelResponse }
type GetAdmChannelResponse = { ADMChannelResponse: ADMChannelResponse }
type UpdateAdmChannelResponse = { ADMChannelResponse: ADMChannelResponse }
type APNSChannelResponse = {
  ApplicationId?: {} | undefined
  CreationDate?: {} | undefined
  DefaultAuthenticationMethod?: {} | undefined
  Enabled?: {} | undefined
  HasCredential?: {} | undefined
  HasTokenKey?: {} | undefined
  Id?: {} | undefined
  IsArchived?: {} | undefined
  LastModifiedBy?: {} | undefined
  LastModifiedDate?: {} | undefined
  Platform: {}
  Version?: {} | undefined
}
type DeleteApnsChannelResponse = { APNSChannelResponse: APNSChannelResponse }
type GetApnsChannelResponse = { APNSChannelResponse: APNSChannelResponse }
type UpdateApnsChannelResponse = { APNSChannelResponse: APNSChannelResponse }
type APNSSandboxChannelResponse = {
  ApplicationId?: {} | undefined
  CreationDate?: {} | undefined
  DefaultAuthenticationMethod?: {} | undefined
  Enabled?: {} | undefined
  HasCredential?: {} | undefined
  HasTokenKey?: {} | undefined
  Id?: {} | undefined
  IsArchived?: {} | undefined
  LastModifiedBy?: {} | undefined
  LastModifiedDate?: {} | undefined
  Platform: {}
  Version?: {} | undefined
}
type DeleteApnsSandboxChannelResponse = { APNSSandboxChannelResponse: APNSSandboxChannelResponse }
type GetApnsSandboxChannelResponse = { APNSSandboxChannelResponse: APNSSandboxChannelResponse }
type UpdateApnsSandboxChannelResponse = { APNSSandboxChannelResponse: APNSSandboxChannelResponse }
type APNSVoipChannelResponse = {
  ApplicationId?: {} | undefined
  CreationDate?: {} | undefined
  DefaultAuthenticationMethod?: {} | undefined
  Enabled?: {} | undefined
  HasCredential?: {} | undefined
  HasTokenKey?: {} | undefined
  Id?: {} | undefined
  IsArchived?: {} | undefined
  LastModifiedBy?: {} | undefined
  LastModifiedDate?: {} | undefined
  Platform: {}
  Version?: {} | undefined
}
type DeleteApnsVoipChannelResponse = { APNSVoipChannelResponse: APNSVoipChannelResponse }
type GetApnsVoipChannelResponse = { APNSVoipChannelResponse: APNSVoipChannelResponse }
type UpdateApnsVoipChannelResponse = { APNSVoipChannelResponse: APNSVoipChannelResponse }
type APNSVoipSandboxChannelResponse = {
  ApplicationId?: {} | undefined
  CreationDate?: {} | undefined
  DefaultAuthenticationMethod?: {} | undefined
  Enabled?: {} | undefined
  HasCredential?: {} | undefined
  HasTokenKey?: {} | undefined
  Id?: {} | undefined
  IsArchived?: {} | undefined
  LastModifiedBy?: {} | undefined
  LastModifiedDate?: {} | undefined
  Platform: {}
  Version?: {} | undefined
}
type DeleteApnsVoipSandboxChannelResponse = {
  APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse
}
type GetApnsVoipSandboxChannelResponse = {
  APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse
}
type UpdateApnsVoipSandboxChannelResponse = {
  APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse
}
type DeleteAppResponse = { ApplicationResponse: ApplicationResponse }
type GetAppResponse = { ApplicationResponse: ApplicationResponse }
type BaiduChannelResponse = {
  ApplicationId?: {} | undefined
  CreationDate?: {} | undefined
  Credential: {}
  Enabled?: {} | undefined
  HasCredential?: {} | undefined
  Id?: {} | undefined
  IsArchived?: {} | undefined
  LastModifiedBy?: {} | undefined
  LastModifiedDate?: {} | undefined
  Platform: {}
  Version?: {} | undefined
}
type DeleteBaiduChannelResponse = { BaiduChannelResponse: BaiduChannelResponse }
type GetBaiduChannelResponse = { BaiduChannelResponse: BaiduChannelResponse }
type UpdateBaiduChannelResponse = { BaiduChannelResponse: BaiduChannelResponse }
type DeleteCampaignResponse = { CampaignResponse: CampaignResponse }
type GetCampaignResponse = { CampaignResponse: CampaignResponse }
type UpdateCampaignResponse = { CampaignResponse: CampaignResponse }
type EmailChannelResponse = {
  ApplicationId?: {} | undefined
  ConfigurationSet?: {} | undefined
  CreationDate?: {} | undefined
  Enabled?: {} | undefined
  FromAddress?: {} | undefined
  HasCredential?: {} | undefined
  Id?: {} | undefined
  Identity?: {} | undefined
  IsArchived?: {} | undefined
  LastModifiedBy?: {} | undefined
  LastModifiedDate?: {} | undefined
  MessagesPerSecond?: {} | undefined
  Platform: {}
  RoleArn?: {} | undefined
  Version?: {} | undefined
}
type DeleteEmailChannelResponse = { EmailChannelResponse: EmailChannelResponse }
type GetEmailChannelResponse = { EmailChannelResponse: EmailChannelResponse }
type UpdateEmailChannelResponse = { EmailChannelResponse: EmailChannelResponse }
type EndpointResponse = {
  Address?: {} | undefined
  ApplicationId?: {} | undefined
  Attributes?: {} | undefined
  ChannelType?: {} | undefined
  CohortId?: {} | undefined
  CreationDate?: {} | undefined
  Demographic?:
    | {
        AppVersion?: {} | undefined
        Locale?: {} | undefined
        Make?: {} | undefined
        Model?: {} | undefined
        ModelVersion?: {} | undefined
        Platform?: {} | undefined
        PlatformVersion?: {} | undefined
        Timezone?: {} | undefined
      }
    | undefined
  EffectiveDate?: {} | undefined
  EndpointStatus?: {} | undefined
  Id?: {} | undefined
  Location?:
    | {
        City?: {} | undefined
        Country?: {} | undefined
        Latitude?: {} | undefined
        Longitude?: {} | undefined
        PostalCode?: {} | undefined
        Region?: {} | undefined
      }
    | undefined
  Metrics?: {} | undefined
  OptOut?: {} | undefined
  RequestId?: {} | undefined
  User?: { UserAttributes?: {} | undefined; UserId?: {} | undefined } | undefined
}
type DeleteEndpointResponse = { EndpointResponse: EndpointResponse }
type GetEndpointResponse = { EndpointResponse: EndpointResponse }
type UpdateEndpointResponse = { MessageBody: MessageBody }
type EventStream = {
  ApplicationId: {}
  DestinationStreamArn: {}
  ExternalId?: {} | undefined
  LastModifiedDate?: {} | undefined
  LastUpdatedBy?: {} | undefined
  RoleArn: {}
}
type DeleteEventStreamResponse = { EventStream: EventStream }
type GetEventStreamResponse = { EventStream: EventStream }
type PutEventStreamResponse = { EventStream: EventStream }
type GCMChannelResponse = {
  ApplicationId?: {} | undefined
  CreationDate?: {} | undefined
  Credential: {}
  Enabled?: {} | undefined
  HasCredential?: {} | undefined
  Id?: {} | undefined
  IsArchived?: {} | undefined
  LastModifiedBy?: {} | undefined
  LastModifiedDate?: {} | undefined
  Platform: {}
  Version?: {} | undefined
}
type DeleteGcmChannelResponse = { GCMChannelResponse: GCMChannelResponse }
type GetGcmChannelResponse = { GCMChannelResponse: GCMChannelResponse }
type UpdateGcmChannelResponse = { GCMChannelResponse: GCMChannelResponse }
type DeleteJourneyResponse = { JourneyResponse: JourneyResponse }
type GetJourneyResponse = { JourneyResponse: JourneyResponse }
type UpdateJourneyResponse = { JourneyResponse: JourneyResponse }
type DeleteRecommenderConfigurationResponse = {
  RecommenderConfigurationResponse: RecommenderConfigurationResponse
}
type GetRecommenderConfigurationResponse = {
  RecommenderConfigurationResponse: RecommenderConfigurationResponse
}
type UpdateRecommenderConfigurationResponse = {
  RecommenderConfigurationResponse: RecommenderConfigurationResponse
}
type DeleteSegmentResponse = { SegmentResponse: SegmentResponse }
type GetSegmentResponse = { SegmentResponse: SegmentResponse }
type UpdateSegmentResponse = { SegmentResponse: SegmentResponse }
type SMSChannelResponse = {
  ApplicationId?: {} | undefined
  CreationDate?: {} | undefined
  Enabled?: {} | undefined
  HasCredential?: {} | undefined
  Id?: {} | undefined
  IsArchived?: {} | undefined
  LastModifiedBy?: {} | undefined
  LastModifiedDate?: {} | undefined
  Platform: {}
  PromotionalMessagesPerSecond?: {} | undefined
  SenderId?: {} | undefined
  ShortCode?: {} | undefined
  TransactionalMessagesPerSecond?: {} | undefined
  Version?: {} | undefined
}
type DeleteSmsChannelResponse = { SMSChannelResponse: SMSChannelResponse }
type GetSmsChannelResponse = { SMSChannelResponse: SMSChannelResponse }
type UpdateSmsChannelResponse = { SMSChannelResponse: SMSChannelResponse }
type EndpointsResponse = { Item: {} }
type DeleteUserEndpointsResponse = { EndpointsResponse: EndpointsResponse }
type GetUserEndpointsResponse = { EndpointsResponse: EndpointsResponse }
type VoiceChannelResponse = {
  ApplicationId?: {} | undefined
  CreationDate?: {} | undefined
  Enabled?: {} | undefined
  HasCredential?: {} | undefined
  Id?: {} | undefined
  IsArchived?: {} | undefined
  LastModifiedBy?: {} | undefined
  LastModifiedDate?: {} | undefined
  Platform: {}
  Version?: {} | undefined
}
type DeleteVoiceChannelResponse = { VoiceChannelResponse: VoiceChannelResponse }
type GetVoiceChannelResponse = { VoiceChannelResponse: VoiceChannelResponse }
type UpdateVoiceChannelResponse = { VoiceChannelResponse: VoiceChannelResponse }
type ApplicationDateRangeKpiResponse = {
  ApplicationId: {}
  EndTime: {}
  KpiName: {}
  KpiResult: { Rows: {} }
  NextToken?: {} | undefined
  StartTime: {}
}
type GetApplicationDateRangeKpiResponse = {
  ApplicationDateRangeKpiResponse: ApplicationDateRangeKpiResponse
}
type ApplicationSettingsResource = {
  ApplicationId: {}
  CampaignHook?:
    | { LambdaFunctionName?: {} | undefined; Mode?: {} | undefined; WebUrl?: {} | undefined }
    | undefined
  LastModifiedDate?: {} | undefined
  Limits?:
    | {
        Daily?: {} | undefined
        MaximumDuration?: {} | undefined
        MessagesPerSecond?: {} | undefined
        Total?: {} | undefined
        Session?: {} | undefined
      }
    | undefined
  QuietTime?: { End?: {} | undefined; Start?: {} | undefined } | undefined
}
type GetApplicationSettingsResponse = { ApplicationSettingsResource: ApplicationSettingsResource }
type Boolean = boolean
type UpdateApplicationSettingsResponse = {
  ApplicationSettingsResource: ApplicationSettingsResource
}
type ActivitiesResponse = { Item: {}; NextToken?: {} | undefined }
type GetCampaignActivitiesResponse = { ActivitiesResponse: ActivitiesResponse }
type CampaignDateRangeKpiResponse = {
  ApplicationId: {}
  CampaignId: {}
  EndTime: {}
  KpiName: {}
  KpiResult: { Rows: {} }
  NextToken?: {} | undefined
  StartTime: {}
}
type GetCampaignDateRangeKpiResponse = {
  CampaignDateRangeKpiResponse: CampaignDateRangeKpiResponse
}
type GetCampaignVersionResponse = { CampaignResponse: CampaignResponse }
type GetCampaignVersionsResponse = { CampaignsResponse: CampaignsResponse }
type ChannelsResponse = { Channels: {} }
type GetChannelsResponse = { ChannelsResponse: ChannelsResponse }
type GetExportJobResponse = { ExportJobResponse: ExportJobResponse }
type GetImportJobResponse = { ImportJobResponse: ImportJobResponse }
type InAppMessagesResponse = { InAppMessageCampaigns?: {} | undefined }
type GetInAppMessagesResponse = { InAppMessagesResponse: InAppMessagesResponse }
type JourneyDateRangeKpiResponse = {
  ApplicationId: {}
  EndTime: {}
  JourneyId: {}
  KpiName: {}
  KpiResult: { Rows: {} }
  NextToken?: {} | undefined
  StartTime: {}
}
type GetJourneyDateRangeKpiResponse = { JourneyDateRangeKpiResponse: JourneyDateRangeKpiResponse }
type JourneyExecutionActivityMetricsResponse = {
  ActivityType: {}
  ApplicationId: {}
  JourneyActivityId: {}
  JourneyId: {}
  LastEvaluatedTime: {}
  Metrics: {}
}
type GetJourneyExecutionActivityMetricsResponse = {
  JourneyExecutionActivityMetricsResponse: JourneyExecutionActivityMetricsResponse
}
type JourneyExecutionMetricsResponse = {
  ApplicationId: {}
  JourneyId: {}
  LastEvaluatedTime: {}
  Metrics: {}
}
type GetJourneyExecutionMetricsResponse = {
  JourneyExecutionMetricsResponse: JourneyExecutionMetricsResponse
}
type GetSegmentExportJobsResponse = { ExportJobsResponse: ExportJobsResponse }
type GetSegmentImportJobsResponse = { ImportJobsResponse: ImportJobsResponse }
type GetSegmentVersionResponse = { SegmentResponse: SegmentResponse }
type GetSegmentVersionsResponse = { SegmentsResponse: SegmentsResponse }
type TagsModel = { tags: {} }
type ListTagsForResourceResponse = { TagsModel: TagsModel }
type TemplateVersionsResponse = {
  Item: {}
  Message?: {} | undefined
  NextToken?: {} | undefined
  RequestID?: {} | undefined
}
type ListTemplateVersionsResponse = { TemplateVersionsResponse: TemplateVersionsResponse }
type TemplatesResponse = { Item: {}; NextToken?: {} | undefined }
type ListTemplatesResponse = { TemplatesResponse: TemplatesResponse }
type NumberValidateResponse = {
  Carrier?: {} | undefined
  City?: {} | undefined
  CleansedPhoneNumberE164?: {} | undefined
  CleansedPhoneNumberNational?: {} | undefined
  Country?: {} | undefined
  CountryCodeIso2?: {} | undefined
  CountryCodeNumeric?: {} | undefined
  County?: {} | undefined
  OriginalCountryCodeIso2?: {} | undefined
  OriginalPhoneNumber?: {} | undefined
  PhoneType?: {} | undefined
  PhoneTypeCode?: {} | undefined
  Timezone?: {} | undefined
  ZipCode?: {} | undefined
}
type PhoneNumberValidateResponse = { NumberValidateResponse: NumberValidateResponse }
type EventsResponse = { Results?: {} | undefined }
type PutEventsResponse = { EventsResponse: EventsResponse }
type AttributesResource = { ApplicationId: {}; AttributeType: {}; Attributes?: {} | undefined }
type RemoveAttributesResponse = { AttributesResource: AttributesResource }
type MessageResponse = {
  ApplicationId: {}
  EndpointResult?: {} | undefined
  RequestId?: {} | undefined
  Result?: {} | undefined
}
type SendMessagesResponse = { MessageResponse: MessageResponse }
type SendOTPMessageResponse = { MessageResponse: MessageResponse }
type SendUsersMessageResponse = {
  ApplicationId: {}
  RequestId?: {} | undefined
  Result?: {} | undefined
}
type SendUsersMessagesResponse = { SendUsersMessageResponse: SendUsersMessageResponse }
type UpdateEndpointsBatchResponse = { MessageBody: MessageBody }
type UpdateJourneyStateResponse = { JourneyResponse: JourneyResponse }
type UpdateTemplateActiveVersionResponse = { MessageBody: MessageBody }
type VerificationResponse = { Valid?: {} | undefined }
type VerifyOTPMessageResponse = { VerificationResponse: VerificationResponse }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/apps': {
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
        } & { json: { CreateApplicationRequest: { Name?: {} | undefined; tags?: {} | undefined } } }
        output: CreateAppResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { query: { 'page-size'?: string | undefined; token?: string | undefined } } & {
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
        output: GetAppsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/campaigns': {
      $post: {
        input: { param: { 'application-id': string } } & {
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
            WriteCampaignRequest: {
              AdditionalTreatments?: {} | undefined
              CustomDeliveryConfiguration?:
                | { DeliveryUri: {}; EndpointTypes?: {} | undefined }
                | undefined
              Description?: {} | undefined
              HoldoutPercent?: {} | undefined
              Hook?:
                | {
                    LambdaFunctionName?: {} | undefined
                    Mode?: {} | undefined
                    WebUrl?: {} | undefined
                  }
                | undefined
              IsPaused?: {} | undefined
              Limits?:
                | {
                    Daily?: {} | undefined
                    MaximumDuration?: {} | undefined
                    MessagesPerSecond?: {} | undefined
                    Total?: {} | undefined
                    Session?: {} | undefined
                  }
                | undefined
              MessageConfiguration?:
                | {
                    ADMMessage?:
                      | {
                          Action?: {} | undefined
                          Body?: {} | undefined
                          ImageIconUrl?: {} | undefined
                          ImageSmallIconUrl?: {} | undefined
                          ImageUrl?: {} | undefined
                          JsonBody?: {} | undefined
                          MediaUrl?: {} | undefined
                          RawContent?: {} | undefined
                          SilentPush?: {} | undefined
                          TimeToLive?: {} | undefined
                          Title?: {} | undefined
                          Url?: {} | undefined
                        }
                      | undefined
                    APNSMessage?:
                      | {
                          Action?: {} | undefined
                          Body?: {} | undefined
                          ImageIconUrl?: {} | undefined
                          ImageSmallIconUrl?: {} | undefined
                          ImageUrl?: {} | undefined
                          JsonBody?: {} | undefined
                          MediaUrl?: {} | undefined
                          RawContent?: {} | undefined
                          SilentPush?: {} | undefined
                          TimeToLive?: {} | undefined
                          Title?: {} | undefined
                          Url?: {} | undefined
                        }
                      | undefined
                    BaiduMessage?:
                      | {
                          Action?: {} | undefined
                          Body?: {} | undefined
                          ImageIconUrl?: {} | undefined
                          ImageSmallIconUrl?: {} | undefined
                          ImageUrl?: {} | undefined
                          JsonBody?: {} | undefined
                          MediaUrl?: {} | undefined
                          RawContent?: {} | undefined
                          SilentPush?: {} | undefined
                          TimeToLive?: {} | undefined
                          Title?: {} | undefined
                          Url?: {} | undefined
                        }
                      | undefined
                    CustomMessage?: { Data?: {} | undefined } | undefined
                    DefaultMessage?:
                      | {
                          Action?: {} | undefined
                          Body?: {} | undefined
                          ImageIconUrl?: {} | undefined
                          ImageSmallIconUrl?: {} | undefined
                          ImageUrl?: {} | undefined
                          JsonBody?: {} | undefined
                          MediaUrl?: {} | undefined
                          RawContent?: {} | undefined
                          SilentPush?: {} | undefined
                          TimeToLive?: {} | undefined
                          Title?: {} | undefined
                          Url?: {} | undefined
                        }
                      | undefined
                    EmailMessage?:
                      | {
                          Body?: {} | undefined
                          FromAddress?: {} | undefined
                          HtmlBody?: {} | undefined
                          Title?: {} | undefined
                        }
                      | undefined
                    GCMMessage?:
                      | {
                          Action?: {} | undefined
                          Body?: {} | undefined
                          ImageIconUrl?: {} | undefined
                          ImageSmallIconUrl?: {} | undefined
                          ImageUrl?: {} | undefined
                          JsonBody?: {} | undefined
                          MediaUrl?: {} | undefined
                          RawContent?: {} | undefined
                          SilentPush?: {} | undefined
                          TimeToLive?: {} | undefined
                          Title?: {} | undefined
                          Url?: {} | undefined
                        }
                      | undefined
                    SMSMessage?:
                      | {
                          Body?: {} | undefined
                          MessageType?: {} | undefined
                          OriginationNumber?: {} | undefined
                          SenderId?: {} | undefined
                          EntityId?: {} | undefined
                          TemplateId?: {} | undefined
                        }
                      | undefined
                    InAppMessage?:
                      | {
                          Body?: {} | undefined
                          Content?: {} | undefined
                          CustomConfig?: {} | undefined
                          Layout?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
              Name?: {} | undefined
              Schedule?:
                | {
                    EndTime?: {} | undefined
                    EventFilter?:
                      | {
                          Dimensions: {
                            Attributes?: {} | undefined
                            EventType?: { DimensionType?: {} | undefined; Values: {} } | undefined
                            Metrics?: {} | undefined
                          }
                          FilterType: {}
                        }
                      | undefined
                    Frequency?: {} | undefined
                    IsLocalTime?: {} | undefined
                    QuietTime?: { End?: {} | undefined; Start?: {} | undefined } | undefined
                    StartTime: {}
                    Timezone?: {} | undefined
                  }
                | undefined
              SegmentId?: {} | undefined
              SegmentVersion?: {} | undefined
              tags?: {} | undefined
              TemplateConfiguration?:
                | {
                    EmailTemplate?: { Name?: {} | undefined; Version?: {} | undefined } | undefined
                    PushTemplate?: { Name?: {} | undefined; Version?: {} | undefined } | undefined
                    SMSTemplate?: { Name?: {} | undefined; Version?: {} | undefined } | undefined
                    VoiceTemplate?: { Name?: {} | undefined; Version?: {} | undefined } | undefined
                  }
                | undefined
              TreatmentDescription?: {} | undefined
              TreatmentName?: {} | undefined
              Priority?: {} | undefined
            }
          }
        }
        output: CreateCampaignResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { 'application-id': string } } & {
          query: { 'page-size'?: string | undefined; token?: string | undefined }
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
        output: GetCampaignsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/templates/:template-name/email': {
      $post: {
        input: { param: { 'template-name': string } } & {
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
            EmailTemplateRequest: {
              DefaultSubstitutions?: {} | undefined
              HtmlPart?: {} | undefined
              RecommenderId?: {} | undefined
              Subject?: {} | undefined
              tags?: {} | undefined
              TemplateDescription?: {} | undefined
              TextPart?: {} | undefined
            }
          }
        }
        output: CreateEmailTemplateResponse
        outputFormat: 'json'
        status: 201
      }
      $delete: {
        input: { param: { 'template-name': string } } & {
          query: { version?: string | undefined }
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
        output: DeleteEmailTemplateResponse
        outputFormat: 'json'
        status: 202
      }
      $get: {
        input: { param: { 'template-name': string } } & {
          query: { version?: string | undefined }
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
        output: GetEmailTemplateResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'template-name': string } } & {
          query: { 'create-new-version'?: boolean | undefined; version?: string | undefined }
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
        } & {
          json: {
            EmailTemplateRequest: {
              DefaultSubstitutions?: {} | undefined
              HtmlPart?: {} | undefined
              RecommenderId?: {} | undefined
              Subject?: {} | undefined
              tags?: {} | undefined
              TemplateDescription?: {} | undefined
              TextPart?: {} | undefined
            }
          }
        }
        output: UpdateEmailTemplateResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/v1/apps/:application-id/jobs/export': {
      $post: {
        input: { param: { 'application-id': string } } & {
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
            ExportJobRequest: {
              RoleArn?: {} | undefined
              S3UrlPrefix?: {} | undefined
              SegmentId?: {} | undefined
              SegmentVersion?: {} | undefined
            }
          }
        }
        output: CreateExportJobResponse
        outputFormat: 'json'
        status: 202
      }
      $get: {
        input: { param: { 'application-id': string } } & {
          query: { 'page-size'?: string | undefined; token?: string | undefined }
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
        output: GetExportJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/jobs/import': {
      $post: {
        input: { param: { 'application-id': string } } & {
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
            ImportJobRequest: {
              DefineSegment?: {} | undefined
              ExternalId?: {} | undefined
              Format?: {} | undefined
              RegisterEndpoints?: {} | undefined
              RoleArn?: {} | undefined
              S3Url?: {} | undefined
              SegmentId?: {} | undefined
              SegmentName?: {} | undefined
            }
          }
        }
        output: CreateImportJobResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { 'application-id': string } } & {
          query: { 'page-size'?: string | undefined; token?: string | undefined }
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
        output: GetImportJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/templates/:template-name/inapp': {
      $post: {
        input: { param: { 'template-name': string } } & {
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
            InAppTemplateRequest: {
              Content?: {} | undefined
              CustomConfig?: {} | undefined
              Layout?: {} | undefined
              tags?: {} | undefined
              TemplateDescription?: {} | undefined
            }
          }
        }
        output: CreateInAppTemplateResponse
        outputFormat: 'json'
        status: 201
      }
      $delete: {
        input: { param: { 'template-name': string } } & {
          query: { version?: string | undefined }
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
        output: DeleteInAppTemplateResponse
        outputFormat: 'json'
        status: 202
      }
      $get: {
        input: { param: { 'template-name': string } } & {
          query: { version?: string | undefined }
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
        output: GetInAppTemplateResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'template-name': string } } & {
          query: { 'create-new-version'?: boolean | undefined; version?: string | undefined }
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
        } & {
          json: {
            InAppTemplateRequest: {
              Content?: {} | undefined
              CustomConfig?: {} | undefined
              Layout?: {} | undefined
              tags?: {} | undefined
              TemplateDescription?: {} | undefined
            }
          }
        }
        output: UpdateInAppTemplateResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/v1/apps/:application-id/journeys': {
      $post: {
        input: { param: { 'application-id': string } } & {
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
            WriteJourneyRequest: {
              Activities?: {} | undefined
              CreationDate?: {} | undefined
              LastModifiedDate?: {} | undefined
              Limits?:
                | {
                    DailyCap?: {} | undefined
                    EndpointReentryCap?: {} | undefined
                    MessagesPerSecond?: {} | undefined
                    EndpointReentryInterval?: {} | undefined
                  }
                | undefined
              LocalTime?: {} | undefined
              Name?: {} | undefined
              QuietTime?: { End?: {} | undefined; Start?: {} | undefined } | undefined
              RefreshFrequency?: {} | undefined
              Schedule?:
                | {
                    EndTime?: {} | undefined
                    StartTime?: {} | undefined
                    Timezone?: {} | undefined
                  }
                | undefined
              StartActivity?: {} | undefined
              StartCondition?:
                | {
                    Description?: {} | undefined
                    EventStartCondition?: EventStartCondition | undefined
                    SegmentStartCondition?: { SegmentId: {} } | undefined
                  }
                | undefined
              State?: {} | undefined
              WaitForQuietTime?: {} | undefined
              RefreshOnSegmentUpdate?: {} | undefined
              JourneyChannelSettings?:
                | {
                    ConnectCampaignArn?: {} | undefined
                    ConnectCampaignExecutionRoleArn?: {} | undefined
                  }
                | undefined
              SendingSchedule?: {} | undefined
              OpenHours?:
                | {
                    EMAIL?: {} | undefined
                    SMS?: {} | undefined
                    PUSH?: {} | undefined
                    VOICE?: {} | undefined
                    CUSTOM?: {} | undefined
                  }
                | undefined
              ClosedDays?:
                | {
                    EMAIL?: {} | undefined
                    SMS?: {} | undefined
                    PUSH?: {} | undefined
                    VOICE?: {} | undefined
                    CUSTOM?: {} | undefined
                  }
                | undefined
            }
          }
        }
        output: CreateJourneyResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { 'application-id': string } } & {
          query: { 'page-size'?: string | undefined; token?: string | undefined }
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
        output: ListJourneysResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/templates/:template-name/push': {
      $post: {
        input: { param: { 'template-name': string } } & {
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
            PushNotificationTemplateRequest: {
              ADM?:
                | {
                    Action?: {} | undefined
                    Body?: {} | undefined
                    ImageIconUrl?: {} | undefined
                    ImageUrl?: {} | undefined
                    RawContent?: {} | undefined
                    SmallImageIconUrl?: {} | undefined
                    Sound?: {} | undefined
                    Title?: {} | undefined
                    Url?: {} | undefined
                  }
                | undefined
              APNS?:
                | {
                    Action?: {} | undefined
                    Body?: {} | undefined
                    MediaUrl?: {} | undefined
                    RawContent?: {} | undefined
                    Sound?: {} | undefined
                    Title?: {} | undefined
                    Url?: {} | undefined
                  }
                | undefined
              Baidu?:
                | {
                    Action?: {} | undefined
                    Body?: {} | undefined
                    ImageIconUrl?: {} | undefined
                    ImageUrl?: {} | undefined
                    RawContent?: {} | undefined
                    SmallImageIconUrl?: {} | undefined
                    Sound?: {} | undefined
                    Title?: {} | undefined
                    Url?: {} | undefined
                  }
                | undefined
              Default?:
                | {
                    Action?: {} | undefined
                    Body?: {} | undefined
                    Sound?: {} | undefined
                    Title?: {} | undefined
                    Url?: {} | undefined
                  }
                | undefined
              DefaultSubstitutions?: {} | undefined
              GCM?:
                | {
                    Action?: {} | undefined
                    Body?: {} | undefined
                    ImageIconUrl?: {} | undefined
                    ImageUrl?: {} | undefined
                    RawContent?: {} | undefined
                    SmallImageIconUrl?: {} | undefined
                    Sound?: {} | undefined
                    Title?: {} | undefined
                    Url?: {} | undefined
                  }
                | undefined
              RecommenderId?: {} | undefined
              tags?: {} | undefined
              TemplateDescription?: {} | undefined
            }
          }
        }
        output: CreatePushTemplateResponse
        outputFormat: 'json'
        status: 201
      }
      $delete: {
        input: { param: { 'template-name': string } } & {
          query: { version?: string | undefined }
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
        output: DeletePushTemplateResponse
        outputFormat: 'json'
        status: 202
      }
      $get: {
        input: { param: { 'template-name': string } } & {
          query: { version?: string | undefined }
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
        output: GetPushTemplateResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'template-name': string } } & {
          query: { 'create-new-version'?: boolean | undefined; version?: string | undefined }
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
        } & {
          json: {
            PushNotificationTemplateRequest: {
              ADM?:
                | {
                    Action?: {} | undefined
                    Body?: {} | undefined
                    ImageIconUrl?: {} | undefined
                    ImageUrl?: {} | undefined
                    RawContent?: {} | undefined
                    SmallImageIconUrl?: {} | undefined
                    Sound?: {} | undefined
                    Title?: {} | undefined
                    Url?: {} | undefined
                  }
                | undefined
              APNS?:
                | {
                    Action?: {} | undefined
                    Body?: {} | undefined
                    MediaUrl?: {} | undefined
                    RawContent?: {} | undefined
                    Sound?: {} | undefined
                    Title?: {} | undefined
                    Url?: {} | undefined
                  }
                | undefined
              Baidu?:
                | {
                    Action?: {} | undefined
                    Body?: {} | undefined
                    ImageIconUrl?: {} | undefined
                    ImageUrl?: {} | undefined
                    RawContent?: {} | undefined
                    SmallImageIconUrl?: {} | undefined
                    Sound?: {} | undefined
                    Title?: {} | undefined
                    Url?: {} | undefined
                  }
                | undefined
              Default?:
                | {
                    Action?: {} | undefined
                    Body?: {} | undefined
                    Sound?: {} | undefined
                    Title?: {} | undefined
                    Url?: {} | undefined
                  }
                | undefined
              DefaultSubstitutions?: {} | undefined
              GCM?:
                | {
                    Action?: {} | undefined
                    Body?: {} | undefined
                    ImageIconUrl?: {} | undefined
                    ImageUrl?: {} | undefined
                    RawContent?: {} | undefined
                    SmallImageIconUrl?: {} | undefined
                    Sound?: {} | undefined
                    Title?: {} | undefined
                    Url?: {} | undefined
                  }
                | undefined
              RecommenderId?: {} | undefined
              tags?: {} | undefined
              TemplateDescription?: {} | undefined
            }
          }
        }
        output: UpdatePushTemplateResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/v1/recommenders': {
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
            CreateRecommenderConfiguration: {
              Attributes?: {} | undefined
              Description?: {} | undefined
              Name?: {} | undefined
              RecommendationProviderIdType?: {} | undefined
              RecommendationProviderRoleArn?: {} | undefined
              RecommendationProviderUri?: {} | undefined
              RecommendationTransformerUri?: {} | undefined
              RecommendationsDisplayName?: {} | undefined
              RecommendationsPerMessage?: {} | undefined
            }
          }
        }
        output: CreateRecommenderConfigurationResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { query: { 'page-size'?: string | undefined; token?: string | undefined } } & {
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
        output: GetRecommenderConfigurationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/segments': {
      $post: {
        input: { param: { 'application-id': string } } & {
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
            WriteSegmentRequest: {
              Dimensions?:
                | {
                    Attributes?: {} | undefined
                    Behavior?:
                      | { Recency?: { Duration: {}; RecencyType: {} } | undefined }
                      | undefined
                    Demographic?:
                      | {
                          AppVersion?: { DimensionType?: {} | undefined; Values: {} } | undefined
                          Channel?: { DimensionType?: {} | undefined; Values: {} } | undefined
                          DeviceType?: { DimensionType?: {} | undefined; Values: {} } | undefined
                          Make?: { DimensionType?: {} | undefined; Values: {} } | undefined
                          Model?: { DimensionType?: {} | undefined; Values: {} } | undefined
                          Platform?: { DimensionType?: {} | undefined; Values: {} } | undefined
                        }
                      | undefined
                    Location?:
                      | {
                          Country?: { DimensionType?: {} | undefined; Values: {} } | undefined
                          GPSPoint?:
                            | {
                                Coordinates: { Latitude: {}; Longitude: {} }
                                RangeInKilometers?: {} | undefined
                              }
                            | undefined
                        }
                      | undefined
                    Metrics?: {} | undefined
                    UserAttributes?: {} | undefined
                  }
                | undefined
              Name?: {} | undefined
              SegmentGroups?: { Groups?: {} | undefined; Include?: {} | undefined } | undefined
              tags?: {} | undefined
            }
          }
        }
        output: CreateSegmentResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { 'application-id': string } } & {
          query: { 'page-size'?: string | undefined; token?: string | undefined }
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
        output: GetSegmentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/templates/:template-name/sms': {
      $post: {
        input: { param: { 'template-name': string } } & {
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
            SMSTemplateRequest: {
              Body?: {} | undefined
              DefaultSubstitutions?: {} | undefined
              RecommenderId?: {} | undefined
              tags?: {} | undefined
              TemplateDescription?: {} | undefined
            }
          }
        }
        output: CreateSmsTemplateResponse
        outputFormat: 'json'
        status: 201
      }
      $delete: {
        input: { param: { 'template-name': string } } & {
          query: { version?: string | undefined }
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
        output: DeleteSmsTemplateResponse
        outputFormat: 'json'
        status: 202
      }
      $get: {
        input: { param: { 'template-name': string } } & {
          query: { version?: string | undefined }
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
        output: GetSmsTemplateResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'template-name': string } } & {
          query: { 'create-new-version'?: boolean | undefined; version?: string | undefined }
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
        } & {
          json: {
            SMSTemplateRequest: {
              Body?: {} | undefined
              DefaultSubstitutions?: {} | undefined
              RecommenderId?: {} | undefined
              tags?: {} | undefined
              TemplateDescription?: {} | undefined
            }
          }
        }
        output: UpdateSmsTemplateResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/v1/templates/:template-name/voice': {
      $post: {
        input: { param: { 'template-name': string } } & {
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
            VoiceTemplateRequest: {
              Body?: {} | undefined
              DefaultSubstitutions?: {} | undefined
              LanguageCode?: {} | undefined
              tags?: {} | undefined
              TemplateDescription?: {} | undefined
              VoiceId?: {} | undefined
            }
          }
        }
        output: CreateVoiceTemplateResponse
        outputFormat: 'json'
        status: 201
      }
      $delete: {
        input: { param: { 'template-name': string } } & {
          query: { version?: string | undefined }
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
        output: DeleteVoiceTemplateResponse
        outputFormat: 'json'
        status: 202
      }
      $get: {
        input: { param: { 'template-name': string } } & {
          query: { version?: string | undefined }
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
        output: GetVoiceTemplateResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'template-name': string } } & {
          query: { 'create-new-version'?: boolean | undefined; version?: string | undefined }
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
        } & {
          json: {
            VoiceTemplateRequest: {
              Body?: {} | undefined
              DefaultSubstitutions?: {} | undefined
              LanguageCode?: {} | undefined
              tags?: {} | undefined
              TemplateDescription?: {} | undefined
              VoiceId?: {} | undefined
            }
          }
        }
        output: UpdateVoiceTemplateResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/v1/apps/:application-id/channels/adm': {
      $delete: {
        input: { param: { 'application-id': string } } & {
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
        output: DeleteAdmChannelResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { 'application-id': string } } & {
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
        output: GetAdmChannelResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'application-id': string } } & {
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
            ADMChannelRequest: {
              ClientId?: {} | undefined
              ClientSecret?: {} | undefined
              Enabled?: {} | undefined
            }
          }
        }
        output: UpdateAdmChannelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/channels/apns': {
      $delete: {
        input: { param: { 'application-id': string } } & {
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
        output: DeleteApnsChannelResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { 'application-id': string } } & {
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
        output: GetApnsChannelResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'application-id': string } } & {
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
            APNSChannelRequest: {
              BundleId?: {} | undefined
              Certificate?: {} | undefined
              DefaultAuthenticationMethod?: {} | undefined
              Enabled?: {} | undefined
              PrivateKey?: {} | undefined
              TeamId?: {} | undefined
              TokenKey?: {} | undefined
              TokenKeyId?: {} | undefined
            }
          }
        }
        output: UpdateApnsChannelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/channels/apns_sandbox': {
      $delete: {
        input: { param: { 'application-id': string } } & {
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
        output: DeleteApnsSandboxChannelResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { 'application-id': string } } & {
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
        output: GetApnsSandboxChannelResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'application-id': string } } & {
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
            APNSSandboxChannelRequest: {
              BundleId?: {} | undefined
              Certificate?: {} | undefined
              DefaultAuthenticationMethod?: {} | undefined
              Enabled?: {} | undefined
              PrivateKey?: {} | undefined
              TeamId?: {} | undefined
              TokenKey?: {} | undefined
              TokenKeyId?: {} | undefined
            }
          }
        }
        output: UpdateApnsSandboxChannelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/channels/apns_voip': {
      $delete: {
        input: { param: { 'application-id': string } } & {
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
        output: DeleteApnsVoipChannelResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { 'application-id': string } } & {
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
        output: GetApnsVoipChannelResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'application-id': string } } & {
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
            APNSVoipChannelRequest: {
              BundleId?: {} | undefined
              Certificate?: {} | undefined
              DefaultAuthenticationMethod?: {} | undefined
              Enabled?: {} | undefined
              PrivateKey?: {} | undefined
              TeamId?: {} | undefined
              TokenKey?: {} | undefined
              TokenKeyId?: {} | undefined
            }
          }
        }
        output: UpdateApnsVoipChannelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/channels/apns_voip_sandbox': {
      $delete: {
        input: { param: { 'application-id': string } } & {
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
        output: DeleteApnsVoipSandboxChannelResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { 'application-id': string } } & {
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
        output: GetApnsVoipSandboxChannelResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'application-id': string } } & {
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
            APNSVoipSandboxChannelRequest: {
              BundleId?: {} | undefined
              Certificate?: {} | undefined
              DefaultAuthenticationMethod?: {} | undefined
              Enabled?: {} | undefined
              PrivateKey?: {} | undefined
              TeamId?: {} | undefined
              TokenKey?: {} | undefined
              TokenKeyId?: {} | undefined
            }
          }
        }
        output: UpdateApnsVoipSandboxChannelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id': {
      $delete: {
        input: { param: { 'application-id': string } } & {
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
        output: DeleteAppResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { 'application-id': string } } & {
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
        output: GetAppResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/channels/baidu': {
      $delete: {
        input: { param: { 'application-id': string } } & {
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
        output: DeleteBaiduChannelResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { 'application-id': string } } & {
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
        output: GetBaiduChannelResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'application-id': string } } & {
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
            BaiduChannelRequest: {
              ApiKey?: {} | undefined
              Enabled?: {} | undefined
              SecretKey?: {} | undefined
            }
          }
        }
        output: UpdateBaiduChannelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/campaigns/:campaign-id': {
      $delete: {
        input: { param: { 'application-id': string; 'campaign-id': string } } & {
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
        output: DeleteCampaignResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { 'application-id': string; 'campaign-id': string } } & {
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
        output: GetCampaignResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'application-id': string; 'campaign-id': string } } & {
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
            WriteCampaignRequest: {
              AdditionalTreatments?: {} | undefined
              CustomDeliveryConfiguration?:
                | { DeliveryUri: {}; EndpointTypes?: {} | undefined }
                | undefined
              Description?: {} | undefined
              HoldoutPercent?: {} | undefined
              Hook?:
                | {
                    LambdaFunctionName?: {} | undefined
                    Mode?: {} | undefined
                    WebUrl?: {} | undefined
                  }
                | undefined
              IsPaused?: {} | undefined
              Limits?:
                | {
                    Daily?: {} | undefined
                    MaximumDuration?: {} | undefined
                    MessagesPerSecond?: {} | undefined
                    Total?: {} | undefined
                    Session?: {} | undefined
                  }
                | undefined
              MessageConfiguration?:
                | {
                    ADMMessage?:
                      | {
                          Action?: {} | undefined
                          Body?: {} | undefined
                          ImageIconUrl?: {} | undefined
                          ImageSmallIconUrl?: {} | undefined
                          ImageUrl?: {} | undefined
                          JsonBody?: {} | undefined
                          MediaUrl?: {} | undefined
                          RawContent?: {} | undefined
                          SilentPush?: {} | undefined
                          TimeToLive?: {} | undefined
                          Title?: {} | undefined
                          Url?: {} | undefined
                        }
                      | undefined
                    APNSMessage?:
                      | {
                          Action?: {} | undefined
                          Body?: {} | undefined
                          ImageIconUrl?: {} | undefined
                          ImageSmallIconUrl?: {} | undefined
                          ImageUrl?: {} | undefined
                          JsonBody?: {} | undefined
                          MediaUrl?: {} | undefined
                          RawContent?: {} | undefined
                          SilentPush?: {} | undefined
                          TimeToLive?: {} | undefined
                          Title?: {} | undefined
                          Url?: {} | undefined
                        }
                      | undefined
                    BaiduMessage?:
                      | {
                          Action?: {} | undefined
                          Body?: {} | undefined
                          ImageIconUrl?: {} | undefined
                          ImageSmallIconUrl?: {} | undefined
                          ImageUrl?: {} | undefined
                          JsonBody?: {} | undefined
                          MediaUrl?: {} | undefined
                          RawContent?: {} | undefined
                          SilentPush?: {} | undefined
                          TimeToLive?: {} | undefined
                          Title?: {} | undefined
                          Url?: {} | undefined
                        }
                      | undefined
                    CustomMessage?: { Data?: {} | undefined } | undefined
                    DefaultMessage?:
                      | {
                          Action?: {} | undefined
                          Body?: {} | undefined
                          ImageIconUrl?: {} | undefined
                          ImageSmallIconUrl?: {} | undefined
                          ImageUrl?: {} | undefined
                          JsonBody?: {} | undefined
                          MediaUrl?: {} | undefined
                          RawContent?: {} | undefined
                          SilentPush?: {} | undefined
                          TimeToLive?: {} | undefined
                          Title?: {} | undefined
                          Url?: {} | undefined
                        }
                      | undefined
                    EmailMessage?:
                      | {
                          Body?: {} | undefined
                          FromAddress?: {} | undefined
                          HtmlBody?: {} | undefined
                          Title?: {} | undefined
                        }
                      | undefined
                    GCMMessage?:
                      | {
                          Action?: {} | undefined
                          Body?: {} | undefined
                          ImageIconUrl?: {} | undefined
                          ImageSmallIconUrl?: {} | undefined
                          ImageUrl?: {} | undefined
                          JsonBody?: {} | undefined
                          MediaUrl?: {} | undefined
                          RawContent?: {} | undefined
                          SilentPush?: {} | undefined
                          TimeToLive?: {} | undefined
                          Title?: {} | undefined
                          Url?: {} | undefined
                        }
                      | undefined
                    SMSMessage?:
                      | {
                          Body?: {} | undefined
                          MessageType?: {} | undefined
                          OriginationNumber?: {} | undefined
                          SenderId?: {} | undefined
                          EntityId?: {} | undefined
                          TemplateId?: {} | undefined
                        }
                      | undefined
                    InAppMessage?:
                      | {
                          Body?: {} | undefined
                          Content?: {} | undefined
                          CustomConfig?: {} | undefined
                          Layout?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
              Name?: {} | undefined
              Schedule?:
                | {
                    EndTime?: {} | undefined
                    EventFilter?:
                      | {
                          Dimensions: {
                            Attributes?: {} | undefined
                            EventType?: { DimensionType?: {} | undefined; Values: {} } | undefined
                            Metrics?: {} | undefined
                          }
                          FilterType: {}
                        }
                      | undefined
                    Frequency?: {} | undefined
                    IsLocalTime?: {} | undefined
                    QuietTime?: { End?: {} | undefined; Start?: {} | undefined } | undefined
                    StartTime: {}
                    Timezone?: {} | undefined
                  }
                | undefined
              SegmentId?: {} | undefined
              SegmentVersion?: {} | undefined
              tags?: {} | undefined
              TemplateConfiguration?:
                | {
                    EmailTemplate?: { Name?: {} | undefined; Version?: {} | undefined } | undefined
                    PushTemplate?: { Name?: {} | undefined; Version?: {} | undefined } | undefined
                    SMSTemplate?: { Name?: {} | undefined; Version?: {} | undefined } | undefined
                    VoiceTemplate?: { Name?: {} | undefined; Version?: {} | undefined } | undefined
                  }
                | undefined
              TreatmentDescription?: {} | undefined
              TreatmentName?: {} | undefined
              Priority?: {} | undefined
            }
          }
        }
        output: UpdateCampaignResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/channels/email': {
      $delete: {
        input: { param: { 'application-id': string } } & {
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
        output: DeleteEmailChannelResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { 'application-id': string } } & {
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
        output: GetEmailChannelResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'application-id': string } } & {
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
            EmailChannelRequest: {
              ConfigurationSet?: {} | undefined
              Enabled?: {} | undefined
              FromAddress?: {} | undefined
              Identity?: {} | undefined
              RoleArn?: {} | undefined
            }
          }
        }
        output: UpdateEmailChannelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/endpoints/:endpoint-id': {
      $delete: {
        input: { param: { 'application-id': string; 'endpoint-id': string } } & {
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
        output: DeleteEndpointResponse
        outputFormat: 'json'
        status: 202
      }
      $get: {
        input: { param: { 'application-id': string; 'endpoint-id': string } } & {
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
        output: GetEndpointResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'application-id': string; 'endpoint-id': string } } & {
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
            EndpointRequest: {
              Address?: {} | undefined
              Attributes?: {} | undefined
              ChannelType?: {} | undefined
              Demographic?:
                | {
                    AppVersion?: {} | undefined
                    Locale?: {} | undefined
                    Make?: {} | undefined
                    Model?: {} | undefined
                    ModelVersion?: {} | undefined
                    Platform?: {} | undefined
                    PlatformVersion?: {} | undefined
                    Timezone?: {} | undefined
                  }
                | undefined
              EffectiveDate?: {} | undefined
              EndpointStatus?: {} | undefined
              Location?:
                | {
                    City?: {} | undefined
                    Country?: {} | undefined
                    Latitude?: {} | undefined
                    Longitude?: {} | undefined
                    PostalCode?: {} | undefined
                    Region?: {} | undefined
                  }
                | undefined
              Metrics?: {} | undefined
              OptOut?: {} | undefined
              RequestId?: {} | undefined
              User?: { UserAttributes?: {} | undefined; UserId?: {} | undefined } | undefined
            }
          }
        }
        output: UpdateEndpointResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/v1/apps/:application-id/eventstream': {
      $delete: {
        input: { param: { 'application-id': string } } & {
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
        output: DeleteEventStreamResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { 'application-id': string } } & {
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
        output: GetEventStreamResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { 'application-id': string } } & {
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
            WriteEventStream: { DestinationStreamArn?: {} | undefined; RoleArn?: {} | undefined }
          }
        }
        output: PutEventStreamResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/channels/gcm': {
      $delete: {
        input: { param: { 'application-id': string } } & {
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
        output: DeleteGcmChannelResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { 'application-id': string } } & {
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
        output: GetGcmChannelResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'application-id': string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { GCMChannelRequest: { ApiKey?: {} | undefined; Enabled?: {} | undefined } } }
        output: UpdateGcmChannelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/journeys/:journey-id': {
      $delete: {
        input: { param: { 'application-id': string; 'journey-id': string } } & {
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
        output: DeleteJourneyResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { 'application-id': string; 'journey-id': string } } & {
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
        output: GetJourneyResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'application-id': string; 'journey-id': string } } & {
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
            WriteJourneyRequest: {
              Activities?: {} | undefined
              CreationDate?: {} | undefined
              LastModifiedDate?: {} | undefined
              Limits?:
                | {
                    DailyCap?: {} | undefined
                    EndpointReentryCap?: {} | undefined
                    MessagesPerSecond?: {} | undefined
                    EndpointReentryInterval?: {} | undefined
                  }
                | undefined
              LocalTime?: {} | undefined
              Name?: {} | undefined
              QuietTime?: { End?: {} | undefined; Start?: {} | undefined } | undefined
              RefreshFrequency?: {} | undefined
              Schedule?:
                | {
                    EndTime?: {} | undefined
                    StartTime?: {} | undefined
                    Timezone?: {} | undefined
                  }
                | undefined
              StartActivity?: {} | undefined
              StartCondition?:
                | {
                    Description?: {} | undefined
                    EventStartCondition?: EventStartCondition | undefined
                    SegmentStartCondition?: { SegmentId: {} } | undefined
                  }
                | undefined
              State?: {} | undefined
              WaitForQuietTime?: {} | undefined
              RefreshOnSegmentUpdate?: {} | undefined
              JourneyChannelSettings?:
                | {
                    ConnectCampaignArn?: {} | undefined
                    ConnectCampaignExecutionRoleArn?: {} | undefined
                  }
                | undefined
              SendingSchedule?: {} | undefined
              OpenHours?:
                | {
                    EMAIL?: {} | undefined
                    SMS?: {} | undefined
                    PUSH?: {} | undefined
                    VOICE?: {} | undefined
                    CUSTOM?: {} | undefined
                  }
                | undefined
              ClosedDays?:
                | {
                    EMAIL?: {} | undefined
                    SMS?: {} | undefined
                    PUSH?: {} | undefined
                    VOICE?: {} | undefined
                    CUSTOM?: {} | undefined
                  }
                | undefined
            }
          }
        }
        output: UpdateJourneyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/recommenders/:recommender-id': {
      $delete: {
        input: { param: { 'recommender-id': string } } & {
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
        output: DeleteRecommenderConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { 'recommender-id': string } } & {
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
        output: GetRecommenderConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'recommender-id': string } } & {
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
            UpdateRecommenderConfiguration: {
              Attributes?: {} | undefined
              Description?: {} | undefined
              Name?: {} | undefined
              RecommendationProviderIdType?: {} | undefined
              RecommendationProviderRoleArn?: {} | undefined
              RecommendationProviderUri?: {} | undefined
              RecommendationTransformerUri?: {} | undefined
              RecommendationsDisplayName?: {} | undefined
              RecommendationsPerMessage?: {} | undefined
            }
          }
        }
        output: UpdateRecommenderConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/segments/:segment-id': {
      $delete: {
        input: { param: { 'application-id': string; 'segment-id': string } } & {
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
        output: DeleteSegmentResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { 'application-id': string; 'segment-id': string } } & {
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
        output: GetSegmentResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'application-id': string; 'segment-id': string } } & {
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
            WriteSegmentRequest: {
              Dimensions?:
                | {
                    Attributes?: {} | undefined
                    Behavior?:
                      | { Recency?: { Duration: {}; RecencyType: {} } | undefined }
                      | undefined
                    Demographic?:
                      | {
                          AppVersion?: { DimensionType?: {} | undefined; Values: {} } | undefined
                          Channel?: { DimensionType?: {} | undefined; Values: {} } | undefined
                          DeviceType?: { DimensionType?: {} | undefined; Values: {} } | undefined
                          Make?: { DimensionType?: {} | undefined; Values: {} } | undefined
                          Model?: { DimensionType?: {} | undefined; Values: {} } | undefined
                          Platform?: { DimensionType?: {} | undefined; Values: {} } | undefined
                        }
                      | undefined
                    Location?:
                      | {
                          Country?: { DimensionType?: {} | undefined; Values: {} } | undefined
                          GPSPoint?:
                            | {
                                Coordinates: { Latitude: {}; Longitude: {} }
                                RangeInKilometers?: {} | undefined
                              }
                            | undefined
                        }
                      | undefined
                    Metrics?: {} | undefined
                    UserAttributes?: {} | undefined
                  }
                | undefined
              Name?: {} | undefined
              SegmentGroups?: { Groups?: {} | undefined; Include?: {} | undefined } | undefined
              tags?: {} | undefined
            }
          }
        }
        output: UpdateSegmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/channels/sms': {
      $delete: {
        input: { param: { 'application-id': string } } & {
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
        output: DeleteSmsChannelResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { 'application-id': string } } & {
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
        output: GetSmsChannelResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'application-id': string } } & {
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
            SMSChannelRequest: {
              Enabled?: {} | undefined
              SenderId?: {} | undefined
              ShortCode?: {} | undefined
            }
          }
        }
        output: UpdateSmsChannelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/users/:user-id': {
      $delete: {
        input: { param: { 'application-id': string; 'user-id': string } } & {
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
        output: DeleteUserEndpointsResponse
        outputFormat: 'json'
        status: 202
      }
      $get: {
        input: { param: { 'application-id': string; 'user-id': string } } & {
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
        output: GetUserEndpointsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/channels/voice': {
      $delete: {
        input: { param: { 'application-id': string } } & {
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
        output: DeleteVoiceChannelResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { 'application-id': string } } & {
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
        output: GetVoiceChannelResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'application-id': string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { VoiceChannelRequest: { Enabled?: {} | undefined } } }
        output: UpdateVoiceChannelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/kpis/daterange/:kpi-name': {
      $get: {
        input: { param: { 'application-id': string; 'kpi-name': string } } & {
          query: {
            'end-time'?: string | undefined
            'next-token'?: string | undefined
            'page-size'?: string | undefined
            'start-time'?: string | undefined
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
        output: GetApplicationDateRangeKpiResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/settings': {
      $get: {
        input: { param: { 'application-id': string } } & {
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
        output: GetApplicationSettingsResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'application-id': string } } & {
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
            WriteApplicationSettingsRequest: {
              CampaignHook?:
                | {
                    LambdaFunctionName?: {} | undefined
                    Mode?: {} | undefined
                    WebUrl?: {} | undefined
                  }
                | undefined
              CloudWatchMetricsEnabled?: {} | undefined
              EventTaggingEnabled?: Boolean | undefined
              Limits?:
                | {
                    Daily?: {} | undefined
                    MaximumDuration?: {} | undefined
                    MessagesPerSecond?: {} | undefined
                    Total?: {} | undefined
                    Session?: {} | undefined
                  }
                | undefined
              QuietTime?: { End?: {} | undefined; Start?: {} | undefined } | undefined
            }
          }
        }
        output: UpdateApplicationSettingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/campaigns/:campaign-id/activities': {
      $get: {
        input: { param: { 'application-id': string; 'campaign-id': string } } & {
          query: { 'page-size'?: string | undefined; token?: string | undefined }
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
        output: GetCampaignActivitiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/campaigns/:campaign-id/kpis/daterange/:kpi-name': {
      $get: {
        input: {
          param: { 'application-id': string; 'campaign-id': string; 'kpi-name': string }
        } & {
          query: {
            'end-time'?: string | undefined
            'next-token'?: string | undefined
            'page-size'?: string | undefined
            'start-time'?: string | undefined
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
        output: GetCampaignDateRangeKpiResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/campaigns/:campaign-id/versions/:version': {
      $get: {
        input: { param: { 'application-id': string; 'campaign-id': string; version: string } } & {
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
        output: GetCampaignVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/campaigns/:campaign-id/versions': {
      $get: {
        input: { param: { 'application-id': string; 'campaign-id': string } } & {
          query: { 'page-size'?: string | undefined; token?: string | undefined }
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
        output: GetCampaignVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/channels': {
      $get: {
        input: { param: { 'application-id': string } } & {
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
        output: GetChannelsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/jobs/export/:job-id': {
      $get: {
        input: { param: { 'application-id': string; 'job-id': string } } & {
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
        output: GetExportJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/jobs/import/:job-id': {
      $get: {
        input: { param: { 'application-id': string; 'job-id': string } } & {
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
        output: GetImportJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/endpoints/:endpoint-id/inappmessages': {
      $get: {
        input: { param: { 'application-id': string; 'endpoint-id': string } } & {
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
        output: GetInAppMessagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/journeys/:journey-id/kpis/daterange/:kpi-name': {
      $get: {
        input: { param: { 'application-id': string; 'journey-id': string; 'kpi-name': string } } & {
          query: {
            'end-time'?: string | undefined
            'next-token'?: string | undefined
            'page-size'?: string | undefined
            'start-time'?: string | undefined
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
        output: GetJourneyDateRangeKpiResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/journeys/:journey-id/activities/:journey-activity-id/execution-metrics': {
      $get: {
        input: {
          param: { 'application-id': string; 'journey-activity-id': string; 'journey-id': string }
        } & { query: { 'next-token'?: string | undefined; 'page-size'?: string | undefined } } & {
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
        output: GetJourneyExecutionActivityMetricsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/journeys/:journey-id/execution-metrics': {
      $get: {
        input: { param: { 'application-id': string; 'journey-id': string } } & {
          query: { 'next-token'?: string | undefined; 'page-size'?: string | undefined }
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
        output: GetJourneyExecutionMetricsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/segments/:segment-id/jobs/export': {
      $get: {
        input: { param: { 'application-id': string; 'segment-id': string } } & {
          query: { 'page-size'?: string | undefined; token?: string | undefined }
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
        output: GetSegmentExportJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/segments/:segment-id/jobs/import': {
      $get: {
        input: { param: { 'application-id': string; 'segment-id': string } } & {
          query: { 'page-size'?: string | undefined; token?: string | undefined }
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
        output: GetSegmentImportJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/segments/:segment-id/versions/:version': {
      $get: {
        input: { param: { 'application-id': string; 'segment-id': string; version: string } } & {
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
        output: GetSegmentVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/segments/:segment-id/versions': {
      $get: {
        input: { param: { 'application-id': string; 'segment-id': string } } & {
          query: { 'page-size'?: string | undefined; token?: string | undefined }
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
        output: GetSegmentVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/tags/:resource-arn': {
      $get: {
        input: { param: { 'resource-arn': string } } & {
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
      $post: {
        input: { param: { 'resource-arn': string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { TagsModel: { tags?: {} | undefined } } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/templates/:template-name/:template-type/versions': {
      $get: {
        input: { param: { 'template-name': string; 'template-type': string } } & {
          query: { 'next-token'?: string | undefined; 'page-size'?: string | undefined }
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
        output: ListTemplateVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/templates': {
      $get: {
        input: {
          query: {
            'next-token'?: string | undefined
            'page-size'?: string | undefined
            prefix?: string | undefined
            'template-type'?: string | undefined
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
        output: ListTemplatesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/phone/number/validate': {
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
            NumberValidateRequest: { IsoCountryCode?: {} | undefined; PhoneNumber?: {} | undefined }
          }
        }
        output: PhoneNumberValidateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/events': {
      $post: {
        input: { param: { 'application-id': string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { EventsRequest: { BatchItem?: {} | undefined } } }
        output: PutEventsResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/v1/apps/:application-id/attributes/:attribute-type': {
      $put: {
        input: { param: { 'application-id': string; 'attribute-type': string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { UpdateAttributesRequest: { Blacklist?: {} | undefined } } }
        output: RemoveAttributesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/messages': {
      $post: {
        input: { param: { 'application-id': string } } & {
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
            MessageRequest: {
              Addresses?: {} | undefined
              Context?: {} | undefined
              Endpoints?: {} | undefined
              MessageConfiguration?:
                | {
                    ADMMessage?:
                      | {
                          Action?: {} | undefined
                          Body?: {} | undefined
                          ConsolidationKey?: {} | undefined
                          Data?: {} | undefined
                          ExpiresAfter?: {} | undefined
                          IconReference?: {} | undefined
                          ImageIconUrl?: {} | undefined
                          ImageUrl?: {} | undefined
                          MD5?: {} | undefined
                          RawContent?: {} | undefined
                          SilentPush?: {} | undefined
                          SmallImageIconUrl?: {} | undefined
                          Sound?: {} | undefined
                          Substitutions?: {} | undefined
                          Title?: {} | undefined
                          Url?: {} | undefined
                        }
                      | undefined
                    APNSMessage?:
                      | {
                          APNSPushType?: {} | undefined
                          Action?: {} | undefined
                          Badge?: {} | undefined
                          Body?: {} | undefined
                          Category?: {} | undefined
                          CollapseId?: {} | undefined
                          Data?: {} | undefined
                          MediaUrl?: {} | undefined
                          PreferredAuthenticationMethod?: {} | undefined
                          Priority?: {} | undefined
                          RawContent?: {} | undefined
                          SilentPush?: {} | undefined
                          Sound?: {} | undefined
                          Substitutions?: {} | undefined
                          ThreadId?: {} | undefined
                          TimeToLive?: {} | undefined
                          Title?: {} | undefined
                          Url?: {} | undefined
                        }
                      | undefined
                    BaiduMessage?:
                      | {
                          Action?: {} | undefined
                          Body?: {} | undefined
                          Data?: {} | undefined
                          IconReference?: {} | undefined
                          ImageIconUrl?: {} | undefined
                          ImageUrl?: {} | undefined
                          RawContent?: {} | undefined
                          SilentPush?: {} | undefined
                          SmallImageIconUrl?: {} | undefined
                          Sound?: {} | undefined
                          Substitutions?: {} | undefined
                          TimeToLive?: {} | undefined
                          Title?: {} | undefined
                          Url?: {} | undefined
                        }
                      | undefined
                    DefaultMessage?:
                      | { Body?: {} | undefined; Substitutions?: {} | undefined }
                      | undefined
                    DefaultPushNotificationMessage?:
                      | {
                          Action?: {} | undefined
                          Body?: {} | undefined
                          Data?: {} | undefined
                          SilentPush?: {} | undefined
                          Substitutions?: {} | undefined
                          Title?: {} | undefined
                          Url?: {} | undefined
                        }
                      | undefined
                    EmailMessage?:
                      | {
                          Body?: {} | undefined
                          FeedbackForwardingAddress?: {} | undefined
                          FromAddress?: {} | undefined
                          RawEmail?: { Data?: {} | undefined } | undefined
                          ReplyToAddresses?: {} | undefined
                          SimpleEmail?:
                            | {
                                HtmlPart?:
                                  | { Charset?: {} | undefined; Data?: {} | undefined }
                                  | undefined
                                Subject?:
                                  | { Charset?: {} | undefined; Data?: {} | undefined }
                                  | undefined
                                TextPart?:
                                  | { Charset?: {} | undefined; Data?: {} | undefined }
                                  | undefined
                              }
                            | undefined
                          Substitutions?: {} | undefined
                        }
                      | undefined
                    GCMMessage?:
                      | {
                          Action?: {} | undefined
                          Body?: {} | undefined
                          CollapseKey?: {} | undefined
                          Data?: {} | undefined
                          IconReference?: {} | undefined
                          ImageIconUrl?: {} | undefined
                          ImageUrl?: {} | undefined
                          Priority?: {} | undefined
                          RawContent?: {} | undefined
                          RestrictedPackageName?: {} | undefined
                          SilentPush?: {} | undefined
                          SmallImageIconUrl?: {} | undefined
                          Sound?: {} | undefined
                          Substitutions?: {} | undefined
                          TimeToLive?: {} | undefined
                          Title?: {} | undefined
                          Url?: {} | undefined
                        }
                      | undefined
                    SMSMessage?:
                      | {
                          Body?: {} | undefined
                          Keyword?: {} | undefined
                          MediaUrl?: {} | undefined
                          MessageType?: {} | undefined
                          OriginationNumber?: {} | undefined
                          SenderId?: {} | undefined
                          Substitutions?: {} | undefined
                          EntityId?: {} | undefined
                          TemplateId?: {} | undefined
                        }
                      | undefined
                    VoiceMessage?:
                      | {
                          Body?: {} | undefined
                          LanguageCode?: {} | undefined
                          OriginationNumber?: {} | undefined
                          Substitutions?: {} | undefined
                          VoiceId?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
              TemplateConfiguration?:
                | {
                    EmailTemplate?: { Name?: {} | undefined; Version?: {} | undefined } | undefined
                    PushTemplate?: { Name?: {} | undefined; Version?: {} | undefined } | undefined
                    SMSTemplate?: { Name?: {} | undefined; Version?: {} | undefined } | undefined
                    VoiceTemplate?: { Name?: {} | undefined; Version?: {} | undefined } | undefined
                  }
                | undefined
              TraceId?: {} | undefined
            }
          }
        }
        output: SendMessagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/otp': {
      $post: {
        input: { param: { 'application-id': string } } & {
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
            SendOTPMessageRequestParameters: {
              AllowedAttempts?: {} | undefined
              BrandName?: {} | undefined
              Channel?: {} | undefined
              CodeLength?: {} | undefined
              DestinationIdentity?: {} | undefined
              EntityId?: {} | undefined
              Language?: {} | undefined
              OriginationIdentity?: {} | undefined
              ReferenceId?: {} | undefined
              TemplateId?: {} | undefined
              ValidityPeriod?: {} | undefined
            }
          }
        }
        output: SendOTPMessageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/users-messages': {
      $post: {
        input: { param: { 'application-id': string } } & {
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
            SendUsersMessageRequest: {
              Context?: {} | undefined
              MessageConfiguration?:
                | {
                    ADMMessage?:
                      | {
                          Action?: {} | undefined
                          Body?: {} | undefined
                          ConsolidationKey?: {} | undefined
                          Data?: {} | undefined
                          ExpiresAfter?: {} | undefined
                          IconReference?: {} | undefined
                          ImageIconUrl?: {} | undefined
                          ImageUrl?: {} | undefined
                          MD5?: {} | undefined
                          RawContent?: {} | undefined
                          SilentPush?: {} | undefined
                          SmallImageIconUrl?: {} | undefined
                          Sound?: {} | undefined
                          Substitutions?: {} | undefined
                          Title?: {} | undefined
                          Url?: {} | undefined
                        }
                      | undefined
                    APNSMessage?:
                      | {
                          APNSPushType?: {} | undefined
                          Action?: {} | undefined
                          Badge?: {} | undefined
                          Body?: {} | undefined
                          Category?: {} | undefined
                          CollapseId?: {} | undefined
                          Data?: {} | undefined
                          MediaUrl?: {} | undefined
                          PreferredAuthenticationMethod?: {} | undefined
                          Priority?: {} | undefined
                          RawContent?: {} | undefined
                          SilentPush?: {} | undefined
                          Sound?: {} | undefined
                          Substitutions?: {} | undefined
                          ThreadId?: {} | undefined
                          TimeToLive?: {} | undefined
                          Title?: {} | undefined
                          Url?: {} | undefined
                        }
                      | undefined
                    BaiduMessage?:
                      | {
                          Action?: {} | undefined
                          Body?: {} | undefined
                          Data?: {} | undefined
                          IconReference?: {} | undefined
                          ImageIconUrl?: {} | undefined
                          ImageUrl?: {} | undefined
                          RawContent?: {} | undefined
                          SilentPush?: {} | undefined
                          SmallImageIconUrl?: {} | undefined
                          Sound?: {} | undefined
                          Substitutions?: {} | undefined
                          TimeToLive?: {} | undefined
                          Title?: {} | undefined
                          Url?: {} | undefined
                        }
                      | undefined
                    DefaultMessage?:
                      | { Body?: {} | undefined; Substitutions?: {} | undefined }
                      | undefined
                    DefaultPushNotificationMessage?:
                      | {
                          Action?: {} | undefined
                          Body?: {} | undefined
                          Data?: {} | undefined
                          SilentPush?: {} | undefined
                          Substitutions?: {} | undefined
                          Title?: {} | undefined
                          Url?: {} | undefined
                        }
                      | undefined
                    EmailMessage?:
                      | {
                          Body?: {} | undefined
                          FeedbackForwardingAddress?: {} | undefined
                          FromAddress?: {} | undefined
                          RawEmail?: { Data?: {} | undefined } | undefined
                          ReplyToAddresses?: {} | undefined
                          SimpleEmail?:
                            | {
                                HtmlPart?:
                                  | { Charset?: {} | undefined; Data?: {} | undefined }
                                  | undefined
                                Subject?:
                                  | { Charset?: {} | undefined; Data?: {} | undefined }
                                  | undefined
                                TextPart?:
                                  | { Charset?: {} | undefined; Data?: {} | undefined }
                                  | undefined
                              }
                            | undefined
                          Substitutions?: {} | undefined
                        }
                      | undefined
                    GCMMessage?:
                      | {
                          Action?: {} | undefined
                          Body?: {} | undefined
                          CollapseKey?: {} | undefined
                          Data?: {} | undefined
                          IconReference?: {} | undefined
                          ImageIconUrl?: {} | undefined
                          ImageUrl?: {} | undefined
                          Priority?: {} | undefined
                          RawContent?: {} | undefined
                          RestrictedPackageName?: {} | undefined
                          SilentPush?: {} | undefined
                          SmallImageIconUrl?: {} | undefined
                          Sound?: {} | undefined
                          Substitutions?: {} | undefined
                          TimeToLive?: {} | undefined
                          Title?: {} | undefined
                          Url?: {} | undefined
                        }
                      | undefined
                    SMSMessage?:
                      | {
                          Body?: {} | undefined
                          Keyword?: {} | undefined
                          MediaUrl?: {} | undefined
                          MessageType?: {} | undefined
                          OriginationNumber?: {} | undefined
                          SenderId?: {} | undefined
                          Substitutions?: {} | undefined
                          EntityId?: {} | undefined
                          TemplateId?: {} | undefined
                        }
                      | undefined
                    VoiceMessage?:
                      | {
                          Body?: {} | undefined
                          LanguageCode?: {} | undefined
                          OriginationNumber?: {} | undefined
                          Substitutions?: {} | undefined
                          VoiceId?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
              TemplateConfiguration?:
                | {
                    EmailTemplate?: { Name?: {} | undefined; Version?: {} | undefined } | undefined
                    PushTemplate?: { Name?: {} | undefined; Version?: {} | undefined } | undefined
                    SMSTemplate?: { Name?: {} | undefined; Version?: {} | undefined } | undefined
                    VoiceTemplate?: { Name?: {} | undefined; Version?: {} | undefined } | undefined
                  }
                | undefined
              TraceId?: {} | undefined
              Users?: {} | undefined
            }
          }
        }
        output: SendUsersMessagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/tags/:resource-arn#tagKeys': {
      $delete: {
        input: { param: { 'resource-arn': string } } & { query: { tagKeys: String[] } } & {
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
    }
  } & {
    '/v1/apps/:application-id/endpoints': {
      $put: {
        input: { param: { 'application-id': string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { EndpointBatchRequest: { Item?: {} | undefined } } }
        output: UpdateEndpointsBatchResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/v1/apps/:application-id/journeys/:journey-id/state': {
      $put: {
        input: { param: { 'application-id': string; 'journey-id': string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { JourneyStateRequest: { State?: {} | undefined } } }
        output: UpdateJourneyStateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/templates/:template-name/:template-type/active-version': {
      $put: {
        input: { param: { 'template-name': string; 'template-type': string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { TemplateActiveVersionRequest: { Version?: {} | undefined } } }
        output: UpdateTemplateActiveVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/:application-id/verify-otp': {
      $post: {
        input: { param: { 'application-id': string } } & {
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
            VerifyOTPMessageRequestParameters: {
              DestinationIdentity?: {} | undefined
              Otp?: {} | undefined
              ReferenceId?: {} | undefined
            }
          }
        }
        output: VerifyOTPMessageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
