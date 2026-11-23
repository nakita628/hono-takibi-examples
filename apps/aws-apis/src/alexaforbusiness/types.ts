type ApproveSkillRequest = { SkillId: {} }
type ApproveSkillResponse = { [x: string]: unknown }
type AssociateContactWithAddressBookRequest = { ContactArn: {}; AddressBookArn: {} }
type AssociateContactWithAddressBookResponse = { [x: string]: unknown }
type AssociateDeviceWithNetworkProfileRequest = { DeviceArn: {}; NetworkProfileArn: {} }
type AssociateDeviceWithNetworkProfileResponse = { [x: string]: unknown }
type AssociateDeviceWithRoomRequest = { DeviceArn?: {} | undefined; RoomArn?: {} | undefined }
type AssociateDeviceWithRoomResponse = { [x: string]: unknown }
type AssociateSkillGroupWithRoomRequest = {
  SkillGroupArn?: {} | undefined
  RoomArn?: {} | undefined
}
type AssociateSkillGroupWithRoomResponse = { [x: string]: unknown }
type AssociateSkillWithSkillGroupRequest = { SkillGroupArn?: {} | undefined; SkillId: {} }
type AssociateSkillWithSkillGroupResponse = { [x: string]: unknown }
type AssociateSkillWithUsersRequest = { SkillId: {} }
type AssociateSkillWithUsersResponse = { [x: string]: unknown }
type CreateAddressBookRequest = {
  Name: {}
  Description?: {} | undefined
  ClientRequestToken?: {} | undefined
  Tags?: {} | undefined
}
type CreateAddressBookResponse = { AddressBookArn?: {} | undefined }
type CreateBusinessReportScheduleRequest = {
  ScheduleName?: {} | undefined
  S3BucketName?: {} | undefined
  S3KeyPrefix?: {} | undefined
  Format: {}
  ContentRange: { Interval: {} }
  Recurrence?: { StartDate?: {} | undefined } | undefined
  ClientRequestToken?: {} | undefined
  Tags?: {} | undefined
}
type CreateBusinessReportScheduleResponse = { ScheduleArn?: {} | undefined }
type CreateConferenceProviderRequest = {
  ConferenceProviderName: {}
  ConferenceProviderType: {}
  IPDialIn?: { Endpoint: {}; CommsProtocol: {} } | undefined
  PSTNDialIn?:
    | { CountryCode: {}; PhoneNumber: {}; OneClickIdDelay: {}; OneClickPinDelay: {} }
    | undefined
  MeetingSetting: { RequirePin: {} }
  ClientRequestToken?: {} | undefined
  Tags?: {} | undefined
}
type CreateConferenceProviderResponse = { ConferenceProviderArn?: {} | undefined }
type CreateContactRequest = {
  DisplayName?: {} | undefined
  FirstName: {}
  LastName?: {} | undefined
  PhoneNumber?: {} | undefined
  PhoneNumbers?: {} | undefined
  SipAddresses?: {} | undefined
  ClientRequestToken?: {} | undefined
  Tags?: {} | undefined
}
type CreateContactResponse = { ContactArn?: {} | undefined }
type CreateGatewayGroupRequest = {
  Name: {}
  Description?: {} | undefined
  ClientRequestToken: {}
  Tags?: {} | undefined
}
type CreateGatewayGroupResponse = { GatewayGroupArn?: {} | undefined }
type ClientRequestToken = string
type CreateNetworkProfileRequest = {
  NetworkProfileName: {}
  Description?: {} | undefined
  Ssid: {}
  SecurityType: {}
  EapMethod?: {} | undefined
  CurrentPassword?: {} | undefined
  NextPassword?: {} | undefined
  CertificateAuthorityArn?: {} | undefined
  TrustAnchors?: {} | undefined
  ClientRequestToken: ClientRequestToken
  Tags?: {} | undefined
}
type CreateNetworkProfileResponse = { NetworkProfileArn?: {} | undefined }
type CreateEndOfMeetingReminder = { ReminderAtMinutes: {}; ReminderType: {}; Enabled: {} }
type CreateProfileRequest = {
  ProfileName: {}
  Timezone: {}
  Address: {}
  DistanceUnit: {}
  TemperatureUnit: {}
  WakeWord: {}
  Locale?: {} | undefined
  ClientRequestToken?: {} | undefined
  SetupModeDisabled?: {} | undefined
  MaxVolumeLimit?: {} | undefined
  PSTNEnabled?: {} | undefined
  DataRetentionOptIn?: {} | undefined
  MeetingRoomConfiguration?:
    | {
        RoomUtilizationMetricsEnabled?: {} | undefined
        EndOfMeetingReminder?: CreateEndOfMeetingReminder | undefined
        InstantBooking?: { DurationInMinutes: {}; Enabled: {} } | undefined
        RequireCheckIn?: { ReleaseAfterMinutes: {}; Enabled: {} } | undefined
      }
    | undefined
  Tags?: {} | undefined
}
type CreateProfileResponse = { ProfileArn?: {} | undefined }
type CreateRoomRequest = {
  RoomName: {}
  Description?: {} | undefined
  ProfileArn?: {} | undefined
  ProviderCalendarId?: {} | undefined
  ClientRequestToken?: {} | undefined
  Tags?: {} | undefined
}
type CreateRoomResponse = { RoomArn?: {} | undefined }
type CreateSkillGroupRequest = {
  SkillGroupName: {}
  Description?: {} | undefined
  ClientRequestToken?: {} | undefined
  Tags?: {} | undefined
}
type CreateSkillGroupResponse = { SkillGroupArn?: {} | undefined }
type CreateUserRequest = {
  UserId: {}
  FirstName?: {} | undefined
  LastName?: {} | undefined
  Email?: {} | undefined
  ClientRequestToken?: {} | undefined
  Tags?: {} | undefined
}
type CreateUserResponse = { UserArn?: {} | undefined }
type DeleteAddressBookRequest = { AddressBookArn: {} }
type DeleteAddressBookResponse = { [x: string]: unknown }
type DeleteBusinessReportScheduleRequest = { ScheduleArn: {} }
type DeleteBusinessReportScheduleResponse = { [x: string]: unknown }
type DeleteConferenceProviderRequest = { ConferenceProviderArn: {} }
type DeleteConferenceProviderResponse = { [x: string]: unknown }
type DeleteContactRequest = { ContactArn: {} }
type DeleteContactResponse = { [x: string]: unknown }
type DeleteDeviceRequest = { DeviceArn: {} }
type DeleteDeviceResponse = { [x: string]: unknown }
type DeleteDeviceUsageDataRequest = { DeviceArn: {}; DeviceUsageType: {} }
type DeleteDeviceUsageDataResponse = { [x: string]: unknown }
type DeleteGatewayGroupRequest = { GatewayGroupArn: {} }
type DeleteGatewayGroupResponse = { [x: string]: unknown }
type DeleteNetworkProfileRequest = { NetworkProfileArn: {} }
type DeleteNetworkProfileResponse = { [x: string]: unknown }
type DeleteProfileRequest = { ProfileArn?: {} | undefined }
type DeleteProfileResponse = { [x: string]: unknown }
type DeleteRoomRequest = { RoomArn?: {} | undefined }
type DeleteRoomResponse = { [x: string]: unknown }
type DeleteRoomSkillParameterRequest = { RoomArn?: {} | undefined; SkillId: {}; ParameterKey: {} }
type DeleteRoomSkillParameterResponse = { [x: string]: unknown }
type DeleteSkillAuthorizationRequest = { SkillId: {}; RoomArn?: {} | undefined }
type DeleteSkillAuthorizationResponse = { [x: string]: unknown }
type DeleteSkillGroupRequest = { SkillGroupArn?: {} | undefined }
type DeleteSkillGroupResponse = { [x: string]: unknown }
type DeleteUserRequest = { UserArn?: {} | undefined; EnrollmentId: {} }
type DeleteUserResponse = { [x: string]: unknown }
type DisassociateContactFromAddressBookRequest = { ContactArn: {}; AddressBookArn: {} }
type DisassociateContactFromAddressBookResponse = { [x: string]: unknown }
type DisassociateDeviceFromRoomRequest = { DeviceArn?: {} | undefined }
type DisassociateDeviceFromRoomResponse = { [x: string]: unknown }
type DisassociateSkillFromSkillGroupRequest = { SkillGroupArn?: {} | undefined; SkillId: {} }
type DisassociateSkillFromSkillGroupResponse = { [x: string]: unknown }
type DisassociateSkillFromUsersRequest = { SkillId: {} }
type DisassociateSkillFromUsersResponse = { [x: string]: unknown }
type DisassociateSkillGroupFromRoomRequest = {
  SkillGroupArn?: {} | undefined
  RoomArn?: {} | undefined
}
type DisassociateSkillGroupFromRoomResponse = { [x: string]: unknown }
type ForgetSmartHomeAppliancesRequest = { RoomArn: {} }
type ForgetSmartHomeAppliancesResponse = { [x: string]: unknown }
type GetAddressBookRequest = { AddressBookArn: {} }
type GetAddressBookResponse = {
  AddressBook?:
    | { AddressBookArn?: {} | undefined; Name?: {} | undefined; Description?: {} | undefined }
    | undefined
}
type GetConferencePreferenceRequest = { [x: string]: unknown }
type GetConferencePreferenceResponse = {
  Preference?: { DefaultConferenceProviderArn?: {} | undefined } | undefined
}
type GetConferenceProviderRequest = { ConferenceProviderArn: {} }
type GetConferenceProviderResponse = {
  ConferenceProvider?:
    | {
        Arn?: {} | undefined
        Name?: {} | undefined
        Type?: {} | undefined
        IPDialIn?: { Endpoint: {}; CommsProtocol: {} } | undefined
        PSTNDialIn?:
          | { CountryCode: {}; PhoneNumber: {}; OneClickIdDelay: {}; OneClickPinDelay: {} }
          | undefined
        MeetingSetting?: { RequirePin: {} } | undefined
      }
    | undefined
}
type GetContactRequest = { ContactArn: {} }
type GetContactResponse = {
  Contact?:
    | {
        ContactArn?: {} | undefined
        DisplayName?: {} | undefined
        FirstName?: {} | undefined
        LastName?: {} | undefined
        PhoneNumber?: {} | undefined
        PhoneNumbers?: {} | undefined
        SipAddresses?: {} | undefined
      }
    | undefined
}
type GetDeviceRequest = { DeviceArn?: {} | undefined }
type GetDeviceResponse = {
  Device?:
    | {
        DeviceArn?: {} | undefined
        DeviceSerialNumber?: {} | undefined
        DeviceType?: {} | undefined
        DeviceName?: {} | undefined
        SoftwareVersion?: {} | undefined
        MacAddress?: {} | undefined
        RoomArn?: {} | undefined
        DeviceStatus?: {} | undefined
        DeviceStatusInfo?:
          | {
              DeviceStatusDetails?: {} | undefined
              ConnectionStatus?: {} | undefined
              ConnectionStatusUpdatedTime?: {} | undefined
            }
          | undefined
        NetworkProfileInfo?:
          | {
              NetworkProfileArn?: {} | undefined
              CertificateArn?: {} | undefined
              CertificateExpirationTime?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type GetGatewayRequest = { GatewayArn: {} }
type GetGatewayResponse = {
  Gateway?:
    | {
        Arn?: {} | undefined
        Name?: {} | undefined
        Description?: {} | undefined
        GatewayGroupArn?: {} | undefined
        SoftwareVersion?: {} | undefined
      }
    | undefined
}
type GetGatewayGroupRequest = { GatewayGroupArn: {} }
type GatewayGroup = { Arn?: {} | undefined; Name?: {} | undefined; Description?: {} | undefined }
type GetGatewayGroupResponse = { GatewayGroup?: GatewayGroup | undefined }
type GetInvitationConfigurationRequest = { [x: string]: unknown }
type GetInvitationConfigurationResponse = {
  OrganizationName?: {} | undefined
  ContactEmail?: {} | undefined
  PrivateSkillIds?: {} | undefined
}
type GetNetworkProfileRequest = { NetworkProfileArn: {} }
type GetNetworkProfileResponse = {
  NetworkProfile?:
    | {
        NetworkProfileArn?: {} | undefined
        NetworkProfileName?: {} | undefined
        Description?: {} | undefined
        Ssid?: {} | undefined
        SecurityType?: {} | undefined
        EapMethod?: {} | undefined
        CurrentPassword?: {} | undefined
        NextPassword?: {} | undefined
        CertificateAuthorityArn?: {} | undefined
        TrustAnchors?: {} | undefined
      }
    | undefined
}
type GetProfileRequest = { ProfileArn?: {} | undefined }
type GetProfileResponse = {
  Profile?:
    | {
        ProfileArn?: {} | undefined
        ProfileName?: {} | undefined
        IsDefault?: {} | undefined
        Address?: {} | undefined
        Timezone?: {} | undefined
        DistanceUnit?: {} | undefined
        TemperatureUnit?: {} | undefined
        WakeWord?: {} | undefined
        Locale?: {} | undefined
        SetupModeDisabled?: {} | undefined
        MaxVolumeLimit?: {} | undefined
        PSTNEnabled?: {} | undefined
        DataRetentionOptIn?: {} | undefined
        AddressBookArn?: {} | undefined
        MeetingRoomConfiguration?:
          | {
              RoomUtilizationMetricsEnabled?: {} | undefined
              EndOfMeetingReminder?:
                | {
                    ReminderAtMinutes?: {} | undefined
                    ReminderType?: {} | undefined
                    Enabled?: {} | undefined
                  }
                | undefined
              InstantBooking?:
                | { DurationInMinutes?: {} | undefined; Enabled?: {} | undefined }
                | undefined
              RequireCheckIn?:
                | { ReleaseAfterMinutes?: {} | undefined; Enabled?: {} | undefined }
                | undefined
            }
          | undefined
      }
    | undefined
}
type GetRoomRequest = { RoomArn?: {} | undefined }
type GetRoomResponse = {
  Room?:
    | {
        RoomArn?: {} | undefined
        RoomName?: {} | undefined
        Description?: {} | undefined
        ProviderCalendarId?: {} | undefined
        ProfileArn?: {} | undefined
      }
    | undefined
}
type GetRoomSkillParameterRequest = { RoomArn?: {} | undefined; SkillId: {}; ParameterKey: {} }
type GetRoomSkillParameterResponse = {
  RoomSkillParameter?: { ParameterKey: {}; ParameterValue: {} } | undefined
}
type GetSkillGroupRequest = { SkillGroupArn?: {} | undefined }
type GetSkillGroupResponse = {
  SkillGroup?:
    | {
        SkillGroupArn?: {} | undefined
        SkillGroupName?: {} | undefined
        Description?: {} | undefined
      }
    | undefined
}
type ListBusinessReportSchedulesRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListBusinessReportSchedulesResponse = {
  BusinessReportSchedules?: {} | undefined
  NextToken?: {} | undefined
}
type ListConferenceProvidersRequest = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListConferenceProvidersResponse = {
  ConferenceProviders?: {} | undefined
  NextToken?: {} | undefined
}
type ListDeviceEventsRequest = {
  DeviceArn: {}
  EventType?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListDeviceEventsResponse = { DeviceEvents?: {} | undefined; NextToken?: {} | undefined }
type ListGatewayGroupsRequest = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListGatewayGroupsResponse = { GatewayGroups?: {} | undefined; NextToken?: {} | undefined }
type ListGatewaysRequest = {
  GatewayGroupArn?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListGatewaysResponse = { Gateways?: {} | undefined; NextToken?: {} | undefined }
type ListSkillsRequest = {
  SkillGroupArn?: {} | undefined
  EnablementType?: {} | undefined
  SkillType?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListSkillsResponse = { SkillSummaries?: {} | undefined; NextToken?: {} | undefined }
type ListSkillsStoreCategoriesRequest = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListSkillsStoreCategoriesResponse = {
  CategoryList?: {} | undefined
  NextToken?: {} | undefined
}
type ListSkillsStoreSkillsByCategoryRequest = {
  CategoryId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListSkillsStoreSkillsByCategoryResponse = {
  SkillsStoreSkills?: {} | undefined
  NextToken?: {} | undefined
}
type ListSmartHomeAppliancesRequest = {
  RoomArn: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListSmartHomeAppliancesResponse = {
  SmartHomeAppliances?: {} | undefined
  NextToken?: {} | undefined
}
type ListTagsRequest = { Arn: {}; NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListTagsResponse = { Tags?: {} | undefined; NextToken?: {} | undefined }
type PutConferencePreferenceRequest = {
  ConferencePreference: { DefaultConferenceProviderArn?: {} | undefined }
}
type PutConferencePreferenceResponse = { [x: string]: unknown }
type PutInvitationConfigurationRequest = {
  OrganizationName: {}
  ContactEmail?: {} | undefined
  PrivateSkillIds?: {} | undefined
}
type PutInvitationConfigurationResponse = { [x: string]: unknown }
type PutRoomSkillParameterRequest = {
  RoomArn?: {} | undefined
  SkillId: {}
  RoomSkillParameter: { ParameterKey: {}; ParameterValue: {} }
}
type PutRoomSkillParameterResponse = { [x: string]: unknown }
type PutSkillAuthorizationRequest = {
  AuthorizationResult: {}
  SkillId: {}
  RoomArn?: {} | undefined
}
type PutSkillAuthorizationResponse = { [x: string]: unknown }
type RegisterAVSDeviceRequest = {
  ClientId: {}
  UserCode: {}
  ProductId: {}
  DeviceSerialNumber?: {} | undefined
  AmazonId: {}
  RoomArn?: {} | undefined
  Tags?: {} | undefined
}
type RegisterAVSDeviceResponse = { DeviceArn?: {} | undefined }
type RejectSkillRequest = { SkillId: {} }
type RejectSkillResponse = { [x: string]: unknown }
type ResolveRoomRequest = { UserId: {}; SkillId: {} }
type ResolveRoomResponse = {
  RoomArn?: {} | undefined
  RoomName?: {} | undefined
  RoomSkillParameters?: {} | undefined
}
type RevokeInvitationRequest = { UserArn?: {} | undefined; EnrollmentId?: {} | undefined }
type RevokeInvitationResponse = { [x: string]: unknown }
type SearchAddressBooksRequest = {
  Filters?: {} | undefined
  SortCriteria?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type SearchAddressBooksResponse = {
  AddressBooks?: {} | undefined
  NextToken?: {} | undefined
  TotalCount?: {} | undefined
}
type SearchContactsRequest = {
  Filters?: {} | undefined
  SortCriteria?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type SearchContactsResponse = {
  Contacts?: {} | undefined
  NextToken?: {} | undefined
  TotalCount?: {} | undefined
}
type SearchDevicesRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Filters?: {} | undefined
  SortCriteria?: {} | undefined
}
type SearchDevicesResponse = {
  Devices?: {} | undefined
  NextToken?: {} | undefined
  TotalCount?: {} | undefined
}
type SearchNetworkProfilesRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Filters?: {} | undefined
  SortCriteria?: {} | undefined
}
type SearchNetworkProfilesResponse = {
  NetworkProfiles?: {} | undefined
  NextToken?: {} | undefined
  TotalCount?: {} | undefined
}
type SearchProfilesRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Filters?: {} | undefined
  SortCriteria?: {} | undefined
}
type SearchProfilesResponse = {
  Profiles?: {} | undefined
  NextToken?: {} | undefined
  TotalCount?: {} | undefined
}
type SearchRoomsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Filters?: {} | undefined
  SortCriteria?: {} | undefined
}
type SearchRoomsResponse = {
  Rooms?: {} | undefined
  NextToken?: {} | undefined
  TotalCount?: {} | undefined
}
type SearchSkillGroupsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Filters?: {} | undefined
  SortCriteria?: {} | undefined
}
type SearchSkillGroupsResponse = {
  SkillGroups?: {} | undefined
  NextToken?: {} | undefined
  TotalCount?: {} | undefined
}
type SearchUsersRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Filters?: {} | undefined
  SortCriteria?: {} | undefined
}
type SearchUsersResponse = {
  Users?: {} | undefined
  NextToken?: {} | undefined
  TotalCount?: {} | undefined
}
type SendAnnouncementRequest = {
  RoomFilters: {}
  Content: { TextList?: {} | undefined; SsmlList?: {} | undefined; AudioList?: {} | undefined }
  TimeToLiveInSeconds?: {} | undefined
  ClientRequestToken: {}
}
type SendAnnouncementResponse = { AnnouncementArn?: {} | undefined }
type SendInvitationRequest = { UserArn?: {} | undefined }
type SendInvitationResponse = { [x: string]: unknown }
type StartDeviceSyncRequest = { RoomArn?: {} | undefined; DeviceArn?: {} | undefined; Features: {} }
type StartDeviceSyncResponse = { [x: string]: unknown }
type StartSmartHomeApplianceDiscoveryRequest = { RoomArn: {} }
type StartSmartHomeApplianceDiscoveryResponse = { [x: string]: unknown }
type TagResourceRequest = { Arn: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { Arn: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateAddressBookRequest = {
  AddressBookArn: {}
  Name?: {} | undefined
  Description?: {} | undefined
}
type UpdateAddressBookResponse = { [x: string]: unknown }
type UpdateBusinessReportScheduleRequest = {
  ScheduleArn: {}
  S3BucketName?: {} | undefined
  S3KeyPrefix?: {} | undefined
  Format?: {} | undefined
  ScheduleName?: {} | undefined
  Recurrence?: { StartDate?: {} | undefined } | undefined
}
type UpdateBusinessReportScheduleResponse = { [x: string]: unknown }
type UpdateConferenceProviderRequest = {
  ConferenceProviderArn: {}
  ConferenceProviderType: {}
  IPDialIn?: { Endpoint: {}; CommsProtocol: {} } | undefined
  PSTNDialIn?:
    | { CountryCode: {}; PhoneNumber: {}; OneClickIdDelay: {}; OneClickPinDelay: {} }
    | undefined
  MeetingSetting: { RequirePin: {} }
}
type UpdateConferenceProviderResponse = { [x: string]: unknown }
type UpdateContactRequest = {
  ContactArn: {}
  DisplayName?: {} | undefined
  FirstName?: {} | undefined
  LastName?: {} | undefined
  PhoneNumber?: {} | undefined
  PhoneNumbers?: {} | undefined
  SipAddresses?: {} | undefined
}
type UpdateContactResponse = { [x: string]: unknown }
type UpdateDeviceRequest = { DeviceArn?: {} | undefined; DeviceName?: {} | undefined }
type UpdateDeviceResponse = { [x: string]: unknown }
type UpdateGatewayRequest = {
  GatewayArn: {}
  Name?: {} | undefined
  Description?: {} | undefined
  SoftwareVersion?: {} | undefined
}
type UpdateGatewayResponse = { [x: string]: unknown }
type UpdateGatewayGroupRequest = {
  GatewayGroupArn: {}
  Name?: {} | undefined
  Description?: {} | undefined
}
type UpdateGatewayGroupResponse = { [x: string]: unknown }
type UpdateNetworkProfileRequest = {
  NetworkProfileArn: {}
  NetworkProfileName?: {} | undefined
  Description?: {} | undefined
  CurrentPassword?: {} | undefined
  NextPassword?: {} | undefined
  CertificateAuthorityArn?: {} | undefined
  TrustAnchors?: {} | undefined
}
type UpdateNetworkProfileResponse = { [x: string]: unknown }
type UpdateProfileRequest = {
  ProfileArn?: {} | undefined
  ProfileName?: {} | undefined
  IsDefault?: {} | undefined
  Timezone?: {} | undefined
  Address?: {} | undefined
  DistanceUnit?: {} | undefined
  TemperatureUnit?: {} | undefined
  WakeWord?: {} | undefined
  Locale?: {} | undefined
  SetupModeDisabled?: {} | undefined
  MaxVolumeLimit?: {} | undefined
  PSTNEnabled?: {} | undefined
  DataRetentionOptIn?: {} | undefined
  MeetingRoomConfiguration?:
    | {
        RoomUtilizationMetricsEnabled?: {} | undefined
        EndOfMeetingReminder?:
          | {
              ReminderAtMinutes?: {} | undefined
              ReminderType?: {} | undefined
              Enabled?: {} | undefined
            }
          | undefined
        InstantBooking?:
          | { DurationInMinutes?: {} | undefined; Enabled?: {} | undefined }
          | undefined
        RequireCheckIn?:
          | { ReleaseAfterMinutes?: {} | undefined; Enabled?: {} | undefined }
          | undefined
      }
    | undefined
}
type UpdateProfileResponse = { [x: string]: unknown }
type UpdateRoomRequest = {
  RoomArn?: {} | undefined
  RoomName?: {} | undefined
  Description?: {} | undefined
  ProviderCalendarId?: {} | undefined
  ProfileArn?: {} | undefined
}
type UpdateRoomResponse = { [x: string]: unknown }
type UpdateSkillGroupRequest = {
  SkillGroupArn?: {} | undefined
  SkillGroupName?: {} | undefined
  Description?: {} | undefined
}
type UpdateSkillGroupResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AlexaForBusiness.ApproveSkill': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.ApproveSkill'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ApproveSkillRequest }
        output: ApproveSkillResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.AssociateContactWithAddressBook': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.AssociateContactWithAddressBook'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateContactWithAddressBookRequest }
        output: AssociateContactWithAddressBookResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithNetworkProfile': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.AssociateDeviceWithNetworkProfile'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateDeviceWithNetworkProfileRequest }
        output: AssociateDeviceWithNetworkProfileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithRoom': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.AssociateDeviceWithRoom'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateDeviceWithRoomRequest }
        output: AssociateDeviceWithRoomResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.AssociateSkillGroupWithRoom': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.AssociateSkillGroupWithRoom'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateSkillGroupWithRoomRequest }
        output: AssociateSkillGroupWithRoomResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.AssociateSkillWithSkillGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.AssociateSkillWithSkillGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateSkillWithSkillGroupRequest }
        output: AssociateSkillWithSkillGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.AssociateSkillWithUsers': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.AssociateSkillWithUsers'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateSkillWithUsersRequest }
        output: AssociateSkillWithUsersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.CreateAddressBook': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.CreateAddressBook'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateAddressBookRequest }
        output: CreateAddressBookResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.CreateBusinessReportSchedule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.CreateBusinessReportSchedule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateBusinessReportScheduleRequest }
        output: CreateBusinessReportScheduleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.CreateConferenceProvider': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.CreateConferenceProvider'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateConferenceProviderRequest }
        output: CreateConferenceProviderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.CreateContact': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.CreateContact'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateContactRequest }
        output: CreateContactResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.CreateGatewayGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.CreateGatewayGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateGatewayGroupRequest }
        output: CreateGatewayGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.CreateNetworkProfile': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.CreateNetworkProfile'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateNetworkProfileRequest }
        output: CreateNetworkProfileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.CreateProfile': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.CreateProfile'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateProfileRequest }
        output: CreateProfileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.CreateRoom': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.CreateRoom'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateRoomRequest }
        output: CreateRoomResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.CreateSkillGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.CreateSkillGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateSkillGroupRequest }
        output: CreateSkillGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.CreateUser': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.CreateUser'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateUserRequest }
        output: CreateUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.DeleteAddressBook': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.DeleteAddressBook'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteAddressBookRequest }
        output: DeleteAddressBookResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.DeleteBusinessReportSchedule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.DeleteBusinessReportSchedule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteBusinessReportScheduleRequest }
        output: DeleteBusinessReportScheduleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.DeleteConferenceProvider': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.DeleteConferenceProvider'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteConferenceProviderRequest }
        output: DeleteConferenceProviderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.DeleteContact': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.DeleteContact'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteContactRequest }
        output: DeleteContactResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.DeleteDevice': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.DeleteDevice'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDeviceRequest }
        output: DeleteDeviceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.DeleteDeviceUsageData': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.DeleteDeviceUsageData'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDeviceUsageDataRequest }
        output: DeleteDeviceUsageDataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.DeleteGatewayGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.DeleteGatewayGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteGatewayGroupRequest }
        output: DeleteGatewayGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.DeleteNetworkProfile': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.DeleteNetworkProfile'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteNetworkProfileRequest }
        output: DeleteNetworkProfileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.DeleteProfile': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.DeleteProfile'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteProfileRequest }
        output: DeleteProfileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.DeleteRoom': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.DeleteRoom'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteRoomRequest }
        output: DeleteRoomResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.DeleteRoomSkillParameter': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.DeleteRoomSkillParameter'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteRoomSkillParameterRequest }
        output: DeleteRoomSkillParameterResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.DeleteSkillAuthorization': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.DeleteSkillAuthorization'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteSkillAuthorizationRequest }
        output: DeleteSkillAuthorizationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.DeleteSkillGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.DeleteSkillGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteSkillGroupRequest }
        output: DeleteSkillGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.DeleteUser': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.DeleteUser'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteUserRequest }
        output: DeleteUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.DisassociateContactFromAddressBook': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.DisassociateContactFromAddressBook'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateContactFromAddressBookRequest }
        output: DisassociateContactFromAddressBookResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.DisassociateDeviceFromRoom': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.DisassociateDeviceFromRoom'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateDeviceFromRoomRequest }
        output: DisassociateDeviceFromRoomResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromSkillGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.DisassociateSkillFromSkillGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateSkillFromSkillGroupRequest }
        output: DisassociateSkillFromSkillGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromUsers': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.DisassociateSkillFromUsers'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateSkillFromUsersRequest }
        output: DisassociateSkillFromUsersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.DisassociateSkillGroupFromRoom': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.DisassociateSkillGroupFromRoom'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateSkillGroupFromRoomRequest }
        output: DisassociateSkillGroupFromRoomResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.ForgetSmartHomeAppliances': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.ForgetSmartHomeAppliances'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ForgetSmartHomeAppliancesRequest }
        output: ForgetSmartHomeAppliancesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.GetAddressBook': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.GetAddressBook'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetAddressBookRequest }
        output: GetAddressBookResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.GetConferencePreference': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.GetConferencePreference'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetConferencePreferenceRequest }
        output: GetConferencePreferenceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.GetConferenceProvider': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.GetConferenceProvider'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetConferenceProviderRequest }
        output: GetConferenceProviderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.GetContact': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.GetContact'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetContactRequest }
        output: GetContactResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.GetDevice': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.GetDevice'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDeviceRequest }
        output: GetDeviceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.GetGateway': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.GetGateway'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetGatewayRequest }
        output: GetGatewayResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.GetGatewayGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.GetGatewayGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetGatewayGroupRequest }
        output: GetGatewayGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.GetInvitationConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.GetInvitationConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetInvitationConfigurationRequest }
        output: GetInvitationConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.GetNetworkProfile': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.GetNetworkProfile'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetNetworkProfileRequest }
        output: GetNetworkProfileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.GetProfile': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.GetProfile'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetProfileRequest }
        output: GetProfileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.GetRoom': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.GetRoom'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRoomRequest }
        output: GetRoomResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.GetRoomSkillParameter': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.GetRoomSkillParameter'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRoomSkillParameterRequest }
        output: GetRoomSkillParameterResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.GetSkillGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.GetSkillGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSkillGroupRequest }
        output: GetSkillGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.ListBusinessReportSchedules': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.ListBusinessReportSchedules'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListBusinessReportSchedulesRequest }
        output: ListBusinessReportSchedulesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.ListConferenceProviders': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.ListConferenceProviders'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListConferenceProvidersRequest }
        output: ListConferenceProvidersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.ListDeviceEvents': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.ListDeviceEvents'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDeviceEventsRequest }
        output: ListDeviceEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.ListGatewayGroups': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.ListGatewayGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListGatewayGroupsRequest }
        output: ListGatewayGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.ListGateways': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.ListGateways'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListGatewaysRequest }
        output: ListGatewaysResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.ListSkills': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.ListSkills'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListSkillsRequest }
        output: ListSkillsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.ListSkillsStoreCategories': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.ListSkillsStoreCategories'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListSkillsStoreCategoriesRequest }
        output: ListSkillsStoreCategoriesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.ListSkillsStoreSkillsByCategory': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.ListSkillsStoreSkillsByCategory'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListSkillsStoreSkillsByCategoryRequest }
        output: ListSkillsStoreSkillsByCategoryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.ListSmartHomeAppliances': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.ListSmartHomeAppliances'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListSmartHomeAppliancesRequest }
        output: ListSmartHomeAppliancesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.ListTags': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.ListTags'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsRequest }
        output: ListTagsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.PutConferencePreference': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.PutConferencePreference'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutConferencePreferenceRequest }
        output: PutConferencePreferenceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.PutInvitationConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.PutInvitationConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutInvitationConfigurationRequest }
        output: PutInvitationConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.PutRoomSkillParameter': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.PutRoomSkillParameter'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutRoomSkillParameterRequest }
        output: PutRoomSkillParameterResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.PutSkillAuthorization': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.PutSkillAuthorization'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutSkillAuthorizationRequest }
        output: PutSkillAuthorizationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.RegisterAVSDevice': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.RegisterAVSDevice'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RegisterAVSDeviceRequest }
        output: RegisterAVSDeviceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.RejectSkill': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.RejectSkill'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RejectSkillRequest }
        output: RejectSkillResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.ResolveRoom': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.ResolveRoom'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ResolveRoomRequest }
        output: ResolveRoomResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.RevokeInvitation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.RevokeInvitation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RevokeInvitationRequest }
        output: RevokeInvitationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.SearchAddressBooks': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.SearchAddressBooks'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SearchAddressBooksRequest }
        output: SearchAddressBooksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.SearchContacts': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.SearchContacts'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SearchContactsRequest }
        output: SearchContactsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.SearchDevices': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.SearchDevices'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SearchDevicesRequest }
        output: SearchDevicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.SearchNetworkProfiles': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.SearchNetworkProfiles'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SearchNetworkProfilesRequest }
        output: SearchNetworkProfilesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.SearchProfiles': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.SearchProfiles'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SearchProfilesRequest }
        output: SearchProfilesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.SearchRooms': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.SearchRooms'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SearchRoomsRequest }
        output: SearchRoomsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.SearchSkillGroups': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.SearchSkillGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SearchSkillGroupsRequest }
        output: SearchSkillGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.SearchUsers': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.SearchUsers'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SearchUsersRequest }
        output: SearchUsersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.SendAnnouncement': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.SendAnnouncement'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SendAnnouncementRequest }
        output: SendAnnouncementResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.SendInvitation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.SendInvitation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SendInvitationRequest }
        output: SendInvitationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.StartDeviceSync': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.StartDeviceSync'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartDeviceSyncRequest }
        output: StartDeviceSyncResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.StartSmartHomeApplianceDiscovery': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.StartSmartHomeApplianceDiscovery'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartSmartHomeApplianceDiscoveryRequest }
        output: StartSmartHomeApplianceDiscoveryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.TagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagResourceRequest }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.UntagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagResourceRequest }
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.UpdateAddressBook': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.UpdateAddressBook'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateAddressBookRequest }
        output: UpdateAddressBookResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.UpdateBusinessReportSchedule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.UpdateBusinessReportSchedule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateBusinessReportScheduleRequest }
        output: UpdateBusinessReportScheduleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.UpdateConferenceProvider': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.UpdateConferenceProvider'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateConferenceProviderRequest }
        output: UpdateConferenceProviderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.UpdateContact': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.UpdateContact'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateContactRequest }
        output: UpdateContactResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.UpdateDevice': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.UpdateDevice'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateDeviceRequest }
        output: UpdateDeviceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.UpdateGateway': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.UpdateGateway'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateGatewayRequest }
        output: UpdateGatewayResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.UpdateGatewayGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.UpdateGatewayGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateGatewayGroupRequest }
        output: UpdateGatewayGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.UpdateNetworkProfile': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.UpdateNetworkProfile'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateNetworkProfileRequest }
        output: UpdateNetworkProfileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.UpdateProfile': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.UpdateProfile'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateProfileRequest }
        output: UpdateProfileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.UpdateRoom': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.UpdateRoom'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateRoomRequest }
        output: UpdateRoomResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AlexaForBusiness.UpdateSkillGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AlexaForBusiness.UpdateSkillGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateSkillGroupRequest }
        output: UpdateSkillGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
