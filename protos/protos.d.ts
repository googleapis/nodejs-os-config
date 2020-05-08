// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as Long from "long";
import * as $protobuf from "protobufjs";
/** Namespace google. */
export namespace google {

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace osconfig. */
        namespace osconfig {

            /** Namespace v1. */
            namespace v1 {

                /** Represents an OsConfigService */
                class OsConfigService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new OsConfigService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new OsConfigService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): OsConfigService;

                    /**
                     * Calls ExecutePatchJob.
                     * @param request ExecutePatchJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PatchJob
                     */
                    public executePatchJob(request: google.cloud.osconfig.v1.IExecutePatchJobRequest, callback: google.cloud.osconfig.v1.OsConfigService.ExecutePatchJobCallback): void;

                    /**
                     * Calls ExecutePatchJob.
                     * @param request ExecutePatchJobRequest message or plain object
                     * @returns Promise
                     */
                    public executePatchJob(request: google.cloud.osconfig.v1.IExecutePatchJobRequest): Promise<google.cloud.osconfig.v1.PatchJob>;

                    /**
                     * Calls GetPatchJob.
                     * @param request GetPatchJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PatchJob
                     */
                    public getPatchJob(request: google.cloud.osconfig.v1.IGetPatchJobRequest, callback: google.cloud.osconfig.v1.OsConfigService.GetPatchJobCallback): void;

                    /**
                     * Calls GetPatchJob.
                     * @param request GetPatchJobRequest message or plain object
                     * @returns Promise
                     */
                    public getPatchJob(request: google.cloud.osconfig.v1.IGetPatchJobRequest): Promise<google.cloud.osconfig.v1.PatchJob>;

                    /**
                     * Calls CancelPatchJob.
                     * @param request CancelPatchJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PatchJob
                     */
                    public cancelPatchJob(request: google.cloud.osconfig.v1.ICancelPatchJobRequest, callback: google.cloud.osconfig.v1.OsConfigService.CancelPatchJobCallback): void;

                    /**
                     * Calls CancelPatchJob.
                     * @param request CancelPatchJobRequest message or plain object
                     * @returns Promise
                     */
                    public cancelPatchJob(request: google.cloud.osconfig.v1.ICancelPatchJobRequest): Promise<google.cloud.osconfig.v1.PatchJob>;

                    /**
                     * Calls ListPatchJobs.
                     * @param request ListPatchJobsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPatchJobsResponse
                     */
                    public listPatchJobs(request: google.cloud.osconfig.v1.IListPatchJobsRequest, callback: google.cloud.osconfig.v1.OsConfigService.ListPatchJobsCallback): void;

                    /**
                     * Calls ListPatchJobs.
                     * @param request ListPatchJobsRequest message or plain object
                     * @returns Promise
                     */
                    public listPatchJobs(request: google.cloud.osconfig.v1.IListPatchJobsRequest): Promise<google.cloud.osconfig.v1.ListPatchJobsResponse>;

                    /**
                     * Calls ListPatchJobInstanceDetails.
                     * @param request ListPatchJobInstanceDetailsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPatchJobInstanceDetailsResponse
                     */
                    public listPatchJobInstanceDetails(request: google.cloud.osconfig.v1.IListPatchJobInstanceDetailsRequest, callback: google.cloud.osconfig.v1.OsConfigService.ListPatchJobInstanceDetailsCallback): void;

                    /**
                     * Calls ListPatchJobInstanceDetails.
                     * @param request ListPatchJobInstanceDetailsRequest message or plain object
                     * @returns Promise
                     */
                    public listPatchJobInstanceDetails(request: google.cloud.osconfig.v1.IListPatchJobInstanceDetailsRequest): Promise<google.cloud.osconfig.v1.ListPatchJobInstanceDetailsResponse>;

                    /**
                     * Calls CreatePatchDeployment.
                     * @param request CreatePatchDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PatchDeployment
                     */
                    public createPatchDeployment(request: google.cloud.osconfig.v1.ICreatePatchDeploymentRequest, callback: google.cloud.osconfig.v1.OsConfigService.CreatePatchDeploymentCallback): void;

                    /**
                     * Calls CreatePatchDeployment.
                     * @param request CreatePatchDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public createPatchDeployment(request: google.cloud.osconfig.v1.ICreatePatchDeploymentRequest): Promise<google.cloud.osconfig.v1.PatchDeployment>;

                    /**
                     * Calls GetPatchDeployment.
                     * @param request GetPatchDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PatchDeployment
                     */
                    public getPatchDeployment(request: google.cloud.osconfig.v1.IGetPatchDeploymentRequest, callback: google.cloud.osconfig.v1.OsConfigService.GetPatchDeploymentCallback): void;

                    /**
                     * Calls GetPatchDeployment.
                     * @param request GetPatchDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public getPatchDeployment(request: google.cloud.osconfig.v1.IGetPatchDeploymentRequest): Promise<google.cloud.osconfig.v1.PatchDeployment>;

                    /**
                     * Calls ListPatchDeployments.
                     * @param request ListPatchDeploymentsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPatchDeploymentsResponse
                     */
                    public listPatchDeployments(request: google.cloud.osconfig.v1.IListPatchDeploymentsRequest, callback: google.cloud.osconfig.v1.OsConfigService.ListPatchDeploymentsCallback): void;

                    /**
                     * Calls ListPatchDeployments.
                     * @param request ListPatchDeploymentsRequest message or plain object
                     * @returns Promise
                     */
                    public listPatchDeployments(request: google.cloud.osconfig.v1.IListPatchDeploymentsRequest): Promise<google.cloud.osconfig.v1.ListPatchDeploymentsResponse>;

                    /**
                     * Calls DeletePatchDeployment.
                     * @param request DeletePatchDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deletePatchDeployment(request: google.cloud.osconfig.v1.IDeletePatchDeploymentRequest, callback: google.cloud.osconfig.v1.OsConfigService.DeletePatchDeploymentCallback): void;

                    /**
                     * Calls DeletePatchDeployment.
                     * @param request DeletePatchDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public deletePatchDeployment(request: google.cloud.osconfig.v1.IDeletePatchDeploymentRequest): Promise<google.protobuf.Empty>;
                }

                namespace OsConfigService {

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1.OsConfigService#executePatchJob}.
                     * @param error Error, if any
                     * @param [response] PatchJob
                     */
                    type ExecutePatchJobCallback = (error: (Error|null), response?: google.cloud.osconfig.v1.PatchJob) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1.OsConfigService#getPatchJob}.
                     * @param error Error, if any
                     * @param [response] PatchJob
                     */
                    type GetPatchJobCallback = (error: (Error|null), response?: google.cloud.osconfig.v1.PatchJob) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1.OsConfigService#cancelPatchJob}.
                     * @param error Error, if any
                     * @param [response] PatchJob
                     */
                    type CancelPatchJobCallback = (error: (Error|null), response?: google.cloud.osconfig.v1.PatchJob) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1.OsConfigService#listPatchJobs}.
                     * @param error Error, if any
                     * @param [response] ListPatchJobsResponse
                     */
                    type ListPatchJobsCallback = (error: (Error|null), response?: google.cloud.osconfig.v1.ListPatchJobsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1.OsConfigService#listPatchJobInstanceDetails}.
                     * @param error Error, if any
                     * @param [response] ListPatchJobInstanceDetailsResponse
                     */
                    type ListPatchJobInstanceDetailsCallback = (error: (Error|null), response?: google.cloud.osconfig.v1.ListPatchJobInstanceDetailsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1.OsConfigService#createPatchDeployment}.
                     * @param error Error, if any
                     * @param [response] PatchDeployment
                     */
                    type CreatePatchDeploymentCallback = (error: (Error|null), response?: google.cloud.osconfig.v1.PatchDeployment) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1.OsConfigService#getPatchDeployment}.
                     * @param error Error, if any
                     * @param [response] PatchDeployment
                     */
                    type GetPatchDeploymentCallback = (error: (Error|null), response?: google.cloud.osconfig.v1.PatchDeployment) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1.OsConfigService#listPatchDeployments}.
                     * @param error Error, if any
                     * @param [response] ListPatchDeploymentsResponse
                     */
                    type ListPatchDeploymentsCallback = (error: (Error|null), response?: google.cloud.osconfig.v1.ListPatchDeploymentsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1.OsConfigService#deletePatchDeployment}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeletePatchDeploymentCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
                }

                /** Properties of a PatchDeployment. */
                interface IPatchDeployment {

                    /** PatchDeployment name */
                    name?: (string|null);

                    /** PatchDeployment description */
                    description?: (string|null);

                    /** PatchDeployment instanceFilter */
                    instanceFilter?: (google.cloud.osconfig.v1.IPatchInstanceFilter|null);

                    /** PatchDeployment patchConfig */
                    patchConfig?: (google.cloud.osconfig.v1.IPatchConfig|null);

                    /** PatchDeployment duration */
                    duration?: (google.protobuf.IDuration|null);

                    /** PatchDeployment oneTimeSchedule */
                    oneTimeSchedule?: (google.cloud.osconfig.v1.IOneTimeSchedule|null);

                    /** PatchDeployment recurringSchedule */
                    recurringSchedule?: (google.cloud.osconfig.v1.IRecurringSchedule|null);

                    /** PatchDeployment createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** PatchDeployment updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** PatchDeployment lastExecuteTime */
                    lastExecuteTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a PatchDeployment. */
                class PatchDeployment implements IPatchDeployment {

                    /**
                     * Constructs a new PatchDeployment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.IPatchDeployment);

                    /** PatchDeployment name. */
                    public name: string;

                    /** PatchDeployment description. */
                    public description: string;

                    /** PatchDeployment instanceFilter. */
                    public instanceFilter?: (google.cloud.osconfig.v1.IPatchInstanceFilter|null);

                    /** PatchDeployment patchConfig. */
                    public patchConfig?: (google.cloud.osconfig.v1.IPatchConfig|null);

                    /** PatchDeployment duration. */
                    public duration?: (google.protobuf.IDuration|null);

                    /** PatchDeployment oneTimeSchedule. */
                    public oneTimeSchedule?: (google.cloud.osconfig.v1.IOneTimeSchedule|null);

                    /** PatchDeployment recurringSchedule. */
                    public recurringSchedule?: (google.cloud.osconfig.v1.IRecurringSchedule|null);

                    /** PatchDeployment createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** PatchDeployment updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** PatchDeployment lastExecuteTime. */
                    public lastExecuteTime?: (google.protobuf.ITimestamp|null);

                    /** PatchDeployment schedule. */
                    public schedule?: ("oneTimeSchedule"|"recurringSchedule");

                    /**
                     * Creates a new PatchDeployment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PatchDeployment instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.IPatchDeployment): google.cloud.osconfig.v1.PatchDeployment;

                    /**
                     * Encodes the specified PatchDeployment message. Does not implicitly {@link google.cloud.osconfig.v1.PatchDeployment.verify|verify} messages.
                     * @param message PatchDeployment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.IPatchDeployment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PatchDeployment message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.PatchDeployment.verify|verify} messages.
                     * @param message PatchDeployment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.IPatchDeployment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PatchDeployment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PatchDeployment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.PatchDeployment;

                    /**
                     * Decodes a PatchDeployment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PatchDeployment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.PatchDeployment;

                    /**
                     * Verifies a PatchDeployment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PatchDeployment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PatchDeployment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.PatchDeployment;

                    /**
                     * Creates a plain object from a PatchDeployment message. Also converts values to other types if specified.
                     * @param message PatchDeployment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.PatchDeployment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PatchDeployment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OneTimeSchedule. */
                interface IOneTimeSchedule {

                    /** OneTimeSchedule executeTime */
                    executeTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an OneTimeSchedule. */
                class OneTimeSchedule implements IOneTimeSchedule {

                    /**
                     * Constructs a new OneTimeSchedule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.IOneTimeSchedule);

                    /** OneTimeSchedule executeTime. */
                    public executeTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new OneTimeSchedule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OneTimeSchedule instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.IOneTimeSchedule): google.cloud.osconfig.v1.OneTimeSchedule;

                    /**
                     * Encodes the specified OneTimeSchedule message. Does not implicitly {@link google.cloud.osconfig.v1.OneTimeSchedule.verify|verify} messages.
                     * @param message OneTimeSchedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.IOneTimeSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OneTimeSchedule message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.OneTimeSchedule.verify|verify} messages.
                     * @param message OneTimeSchedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.IOneTimeSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OneTimeSchedule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OneTimeSchedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.OneTimeSchedule;

                    /**
                     * Decodes an OneTimeSchedule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OneTimeSchedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.OneTimeSchedule;

                    /**
                     * Verifies an OneTimeSchedule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OneTimeSchedule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OneTimeSchedule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.OneTimeSchedule;

                    /**
                     * Creates a plain object from an OneTimeSchedule message. Also converts values to other types if specified.
                     * @param message OneTimeSchedule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.OneTimeSchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OneTimeSchedule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RecurringSchedule. */
                interface IRecurringSchedule {

                    /** RecurringSchedule timeZone */
                    timeZone?: (google.type.ITimeZone|null);

                    /** RecurringSchedule startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** RecurringSchedule endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** RecurringSchedule timeOfDay */
                    timeOfDay?: (google.type.ITimeOfDay|null);

                    /** RecurringSchedule frequency */
                    frequency?: (google.cloud.osconfig.v1.RecurringSchedule.Frequency|keyof typeof google.cloud.osconfig.v1.RecurringSchedule.Frequency|null);

                    /** RecurringSchedule weekly */
                    weekly?: (google.cloud.osconfig.v1.IWeeklySchedule|null);

                    /** RecurringSchedule monthly */
                    monthly?: (google.cloud.osconfig.v1.IMonthlySchedule|null);

                    /** RecurringSchedule lastExecuteTime */
                    lastExecuteTime?: (google.protobuf.ITimestamp|null);

                    /** RecurringSchedule nextExecuteTime */
                    nextExecuteTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a RecurringSchedule. */
                class RecurringSchedule implements IRecurringSchedule {

                    /**
                     * Constructs a new RecurringSchedule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.IRecurringSchedule);

                    /** RecurringSchedule timeZone. */
                    public timeZone?: (google.type.ITimeZone|null);

                    /** RecurringSchedule startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** RecurringSchedule endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** RecurringSchedule timeOfDay. */
                    public timeOfDay?: (google.type.ITimeOfDay|null);

                    /** RecurringSchedule frequency. */
                    public frequency: (google.cloud.osconfig.v1.RecurringSchedule.Frequency|keyof typeof google.cloud.osconfig.v1.RecurringSchedule.Frequency);

                    /** RecurringSchedule weekly. */
                    public weekly?: (google.cloud.osconfig.v1.IWeeklySchedule|null);

                    /** RecurringSchedule monthly. */
                    public monthly?: (google.cloud.osconfig.v1.IMonthlySchedule|null);

                    /** RecurringSchedule lastExecuteTime. */
                    public lastExecuteTime?: (google.protobuf.ITimestamp|null);

                    /** RecurringSchedule nextExecuteTime. */
                    public nextExecuteTime?: (google.protobuf.ITimestamp|null);

                    /** RecurringSchedule scheduleConfig. */
                    public scheduleConfig?: ("weekly"|"monthly");

                    /**
                     * Creates a new RecurringSchedule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RecurringSchedule instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.IRecurringSchedule): google.cloud.osconfig.v1.RecurringSchedule;

                    /**
                     * Encodes the specified RecurringSchedule message. Does not implicitly {@link google.cloud.osconfig.v1.RecurringSchedule.verify|verify} messages.
                     * @param message RecurringSchedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.IRecurringSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RecurringSchedule message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.RecurringSchedule.verify|verify} messages.
                     * @param message RecurringSchedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.IRecurringSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RecurringSchedule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RecurringSchedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.RecurringSchedule;

                    /**
                     * Decodes a RecurringSchedule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RecurringSchedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.RecurringSchedule;

                    /**
                     * Verifies a RecurringSchedule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RecurringSchedule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RecurringSchedule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.RecurringSchedule;

                    /**
                     * Creates a plain object from a RecurringSchedule message. Also converts values to other types if specified.
                     * @param message RecurringSchedule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.RecurringSchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RecurringSchedule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace RecurringSchedule {

                    /** Frequency enum. */
                    enum Frequency {
                        FREQUENCY_UNSPECIFIED = 0,
                        WEEKLY = 1,
                        MONTHLY = 2
                    }
                }

                /** Properties of a WeeklySchedule. */
                interface IWeeklySchedule {

                    /** WeeklySchedule dayOfWeek */
                    dayOfWeek?: (google.type.DayOfWeek|keyof typeof google.type.DayOfWeek|null);
                }

                /** Represents a WeeklySchedule. */
                class WeeklySchedule implements IWeeklySchedule {

                    /**
                     * Constructs a new WeeklySchedule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.IWeeklySchedule);

                    /** WeeklySchedule dayOfWeek. */
                    public dayOfWeek: (google.type.DayOfWeek|keyof typeof google.type.DayOfWeek);

                    /**
                     * Creates a new WeeklySchedule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WeeklySchedule instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.IWeeklySchedule): google.cloud.osconfig.v1.WeeklySchedule;

                    /**
                     * Encodes the specified WeeklySchedule message. Does not implicitly {@link google.cloud.osconfig.v1.WeeklySchedule.verify|verify} messages.
                     * @param message WeeklySchedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.IWeeklySchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WeeklySchedule message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.WeeklySchedule.verify|verify} messages.
                     * @param message WeeklySchedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.IWeeklySchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WeeklySchedule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WeeklySchedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.WeeklySchedule;

                    /**
                     * Decodes a WeeklySchedule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WeeklySchedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.WeeklySchedule;

                    /**
                     * Verifies a WeeklySchedule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WeeklySchedule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WeeklySchedule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.WeeklySchedule;

                    /**
                     * Creates a plain object from a WeeklySchedule message. Also converts values to other types if specified.
                     * @param message WeeklySchedule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.WeeklySchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WeeklySchedule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MonthlySchedule. */
                interface IMonthlySchedule {

                    /** MonthlySchedule weekDayOfMonth */
                    weekDayOfMonth?: (google.cloud.osconfig.v1.IWeekDayOfMonth|null);

                    /** MonthlySchedule monthDay */
                    monthDay?: (number|null);
                }

                /** Represents a MonthlySchedule. */
                class MonthlySchedule implements IMonthlySchedule {

                    /**
                     * Constructs a new MonthlySchedule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.IMonthlySchedule);

                    /** MonthlySchedule weekDayOfMonth. */
                    public weekDayOfMonth?: (google.cloud.osconfig.v1.IWeekDayOfMonth|null);

                    /** MonthlySchedule monthDay. */
                    public monthDay: number;

                    /** MonthlySchedule dayOfMonth. */
                    public dayOfMonth?: ("weekDayOfMonth"|"monthDay");

                    /**
                     * Creates a new MonthlySchedule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MonthlySchedule instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.IMonthlySchedule): google.cloud.osconfig.v1.MonthlySchedule;

                    /**
                     * Encodes the specified MonthlySchedule message. Does not implicitly {@link google.cloud.osconfig.v1.MonthlySchedule.verify|verify} messages.
                     * @param message MonthlySchedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.IMonthlySchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MonthlySchedule message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.MonthlySchedule.verify|verify} messages.
                     * @param message MonthlySchedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.IMonthlySchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MonthlySchedule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MonthlySchedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.MonthlySchedule;

                    /**
                     * Decodes a MonthlySchedule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MonthlySchedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.MonthlySchedule;

                    /**
                     * Verifies a MonthlySchedule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MonthlySchedule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MonthlySchedule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.MonthlySchedule;

                    /**
                     * Creates a plain object from a MonthlySchedule message. Also converts values to other types if specified.
                     * @param message MonthlySchedule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.MonthlySchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MonthlySchedule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a WeekDayOfMonth. */
                interface IWeekDayOfMonth {

                    /** WeekDayOfMonth weekOrdinal */
                    weekOrdinal?: (number|null);

                    /** WeekDayOfMonth dayOfWeek */
                    dayOfWeek?: (google.type.DayOfWeek|keyof typeof google.type.DayOfWeek|null);
                }

                /** Represents a WeekDayOfMonth. */
                class WeekDayOfMonth implements IWeekDayOfMonth {

                    /**
                     * Constructs a new WeekDayOfMonth.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.IWeekDayOfMonth);

                    /** WeekDayOfMonth weekOrdinal. */
                    public weekOrdinal: number;

                    /** WeekDayOfMonth dayOfWeek. */
                    public dayOfWeek: (google.type.DayOfWeek|keyof typeof google.type.DayOfWeek);

                    /**
                     * Creates a new WeekDayOfMonth instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WeekDayOfMonth instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.IWeekDayOfMonth): google.cloud.osconfig.v1.WeekDayOfMonth;

                    /**
                     * Encodes the specified WeekDayOfMonth message. Does not implicitly {@link google.cloud.osconfig.v1.WeekDayOfMonth.verify|verify} messages.
                     * @param message WeekDayOfMonth message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.IWeekDayOfMonth, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WeekDayOfMonth message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.WeekDayOfMonth.verify|verify} messages.
                     * @param message WeekDayOfMonth message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.IWeekDayOfMonth, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WeekDayOfMonth message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WeekDayOfMonth
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.WeekDayOfMonth;

                    /**
                     * Decodes a WeekDayOfMonth message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WeekDayOfMonth
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.WeekDayOfMonth;

                    /**
                     * Verifies a WeekDayOfMonth message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WeekDayOfMonth message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WeekDayOfMonth
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.WeekDayOfMonth;

                    /**
                     * Creates a plain object from a WeekDayOfMonth message. Also converts values to other types if specified.
                     * @param message WeekDayOfMonth
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.WeekDayOfMonth, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WeekDayOfMonth to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreatePatchDeploymentRequest. */
                interface ICreatePatchDeploymentRequest {

                    /** CreatePatchDeploymentRequest parent */
                    parent?: (string|null);

                    /** CreatePatchDeploymentRequest patchDeploymentId */
                    patchDeploymentId?: (string|null);

                    /** CreatePatchDeploymentRequest patchDeployment */
                    patchDeployment?: (google.cloud.osconfig.v1.IPatchDeployment|null);
                }

                /** Represents a CreatePatchDeploymentRequest. */
                class CreatePatchDeploymentRequest implements ICreatePatchDeploymentRequest {

                    /**
                     * Constructs a new CreatePatchDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.ICreatePatchDeploymentRequest);

                    /** CreatePatchDeploymentRequest parent. */
                    public parent: string;

                    /** CreatePatchDeploymentRequest patchDeploymentId. */
                    public patchDeploymentId: string;

                    /** CreatePatchDeploymentRequest patchDeployment. */
                    public patchDeployment?: (google.cloud.osconfig.v1.IPatchDeployment|null);

                    /**
                     * Creates a new CreatePatchDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreatePatchDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.ICreatePatchDeploymentRequest): google.cloud.osconfig.v1.CreatePatchDeploymentRequest;

                    /**
                     * Encodes the specified CreatePatchDeploymentRequest message. Does not implicitly {@link google.cloud.osconfig.v1.CreatePatchDeploymentRequest.verify|verify} messages.
                     * @param message CreatePatchDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.ICreatePatchDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreatePatchDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.CreatePatchDeploymentRequest.verify|verify} messages.
                     * @param message CreatePatchDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.ICreatePatchDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreatePatchDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreatePatchDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.CreatePatchDeploymentRequest;

                    /**
                     * Decodes a CreatePatchDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreatePatchDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.CreatePatchDeploymentRequest;

                    /**
                     * Verifies a CreatePatchDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreatePatchDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreatePatchDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.CreatePatchDeploymentRequest;

                    /**
                     * Creates a plain object from a CreatePatchDeploymentRequest message. Also converts values to other types if specified.
                     * @param message CreatePatchDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.CreatePatchDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreatePatchDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetPatchDeploymentRequest. */
                interface IGetPatchDeploymentRequest {

                    /** GetPatchDeploymentRequest name */
                    name?: (string|null);
                }

                /** Represents a GetPatchDeploymentRequest. */
                class GetPatchDeploymentRequest implements IGetPatchDeploymentRequest {

                    /**
                     * Constructs a new GetPatchDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.IGetPatchDeploymentRequest);

                    /** GetPatchDeploymentRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetPatchDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPatchDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.IGetPatchDeploymentRequest): google.cloud.osconfig.v1.GetPatchDeploymentRequest;

                    /**
                     * Encodes the specified GetPatchDeploymentRequest message. Does not implicitly {@link google.cloud.osconfig.v1.GetPatchDeploymentRequest.verify|verify} messages.
                     * @param message GetPatchDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.IGetPatchDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPatchDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.GetPatchDeploymentRequest.verify|verify} messages.
                     * @param message GetPatchDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.IGetPatchDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPatchDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPatchDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.GetPatchDeploymentRequest;

                    /**
                     * Decodes a GetPatchDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPatchDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.GetPatchDeploymentRequest;

                    /**
                     * Verifies a GetPatchDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPatchDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPatchDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.GetPatchDeploymentRequest;

                    /**
                     * Creates a plain object from a GetPatchDeploymentRequest message. Also converts values to other types if specified.
                     * @param message GetPatchDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.GetPatchDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPatchDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListPatchDeploymentsRequest. */
                interface IListPatchDeploymentsRequest {

                    /** ListPatchDeploymentsRequest parent */
                    parent?: (string|null);

                    /** ListPatchDeploymentsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPatchDeploymentsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListPatchDeploymentsRequest. */
                class ListPatchDeploymentsRequest implements IListPatchDeploymentsRequest {

                    /**
                     * Constructs a new ListPatchDeploymentsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.IListPatchDeploymentsRequest);

                    /** ListPatchDeploymentsRequest parent. */
                    public parent: string;

                    /** ListPatchDeploymentsRequest pageSize. */
                    public pageSize: number;

                    /** ListPatchDeploymentsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListPatchDeploymentsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPatchDeploymentsRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.IListPatchDeploymentsRequest): google.cloud.osconfig.v1.ListPatchDeploymentsRequest;

                    /**
                     * Encodes the specified ListPatchDeploymentsRequest message. Does not implicitly {@link google.cloud.osconfig.v1.ListPatchDeploymentsRequest.verify|verify} messages.
                     * @param message ListPatchDeploymentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.IListPatchDeploymentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPatchDeploymentsRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.ListPatchDeploymentsRequest.verify|verify} messages.
                     * @param message ListPatchDeploymentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.IListPatchDeploymentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPatchDeploymentsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPatchDeploymentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.ListPatchDeploymentsRequest;

                    /**
                     * Decodes a ListPatchDeploymentsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPatchDeploymentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.ListPatchDeploymentsRequest;

                    /**
                     * Verifies a ListPatchDeploymentsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPatchDeploymentsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPatchDeploymentsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.ListPatchDeploymentsRequest;

                    /**
                     * Creates a plain object from a ListPatchDeploymentsRequest message. Also converts values to other types if specified.
                     * @param message ListPatchDeploymentsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.ListPatchDeploymentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPatchDeploymentsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListPatchDeploymentsResponse. */
                interface IListPatchDeploymentsResponse {

                    /** ListPatchDeploymentsResponse patchDeployments */
                    patchDeployments?: (google.cloud.osconfig.v1.IPatchDeployment[]|null);

                    /** ListPatchDeploymentsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListPatchDeploymentsResponse. */
                class ListPatchDeploymentsResponse implements IListPatchDeploymentsResponse {

                    /**
                     * Constructs a new ListPatchDeploymentsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.IListPatchDeploymentsResponse);

                    /** ListPatchDeploymentsResponse patchDeployments. */
                    public patchDeployments: google.cloud.osconfig.v1.IPatchDeployment[];

                    /** ListPatchDeploymentsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListPatchDeploymentsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPatchDeploymentsResponse instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.IListPatchDeploymentsResponse): google.cloud.osconfig.v1.ListPatchDeploymentsResponse;

                    /**
                     * Encodes the specified ListPatchDeploymentsResponse message. Does not implicitly {@link google.cloud.osconfig.v1.ListPatchDeploymentsResponse.verify|verify} messages.
                     * @param message ListPatchDeploymentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.IListPatchDeploymentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPatchDeploymentsResponse message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.ListPatchDeploymentsResponse.verify|verify} messages.
                     * @param message ListPatchDeploymentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.IListPatchDeploymentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPatchDeploymentsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPatchDeploymentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.ListPatchDeploymentsResponse;

                    /**
                     * Decodes a ListPatchDeploymentsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPatchDeploymentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.ListPatchDeploymentsResponse;

                    /**
                     * Verifies a ListPatchDeploymentsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPatchDeploymentsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPatchDeploymentsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.ListPatchDeploymentsResponse;

                    /**
                     * Creates a plain object from a ListPatchDeploymentsResponse message. Also converts values to other types if specified.
                     * @param message ListPatchDeploymentsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.ListPatchDeploymentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPatchDeploymentsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeletePatchDeploymentRequest. */
                interface IDeletePatchDeploymentRequest {

                    /** DeletePatchDeploymentRequest name */
                    name?: (string|null);
                }

                /** Represents a DeletePatchDeploymentRequest. */
                class DeletePatchDeploymentRequest implements IDeletePatchDeploymentRequest {

                    /**
                     * Constructs a new DeletePatchDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.IDeletePatchDeploymentRequest);

                    /** DeletePatchDeploymentRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeletePatchDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeletePatchDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.IDeletePatchDeploymentRequest): google.cloud.osconfig.v1.DeletePatchDeploymentRequest;

                    /**
                     * Encodes the specified DeletePatchDeploymentRequest message. Does not implicitly {@link google.cloud.osconfig.v1.DeletePatchDeploymentRequest.verify|verify} messages.
                     * @param message DeletePatchDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.IDeletePatchDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeletePatchDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.DeletePatchDeploymentRequest.verify|verify} messages.
                     * @param message DeletePatchDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.IDeletePatchDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeletePatchDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeletePatchDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.DeletePatchDeploymentRequest;

                    /**
                     * Decodes a DeletePatchDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeletePatchDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.DeletePatchDeploymentRequest;

                    /**
                     * Verifies a DeletePatchDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeletePatchDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeletePatchDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.DeletePatchDeploymentRequest;

                    /**
                     * Creates a plain object from a DeletePatchDeploymentRequest message. Also converts values to other types if specified.
                     * @param message DeletePatchDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.DeletePatchDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeletePatchDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ExecutePatchJobRequest. */
                interface IExecutePatchJobRequest {

                    /** ExecutePatchJobRequest parent */
                    parent?: (string|null);

                    /** ExecutePatchJobRequest description */
                    description?: (string|null);

                    /** ExecutePatchJobRequest instanceFilter */
                    instanceFilter?: (google.cloud.osconfig.v1.IPatchInstanceFilter|null);

                    /** ExecutePatchJobRequest patchConfig */
                    patchConfig?: (google.cloud.osconfig.v1.IPatchConfig|null);

                    /** ExecutePatchJobRequest duration */
                    duration?: (google.protobuf.IDuration|null);

                    /** ExecutePatchJobRequest dryRun */
                    dryRun?: (boolean|null);

                    /** ExecutePatchJobRequest displayName */
                    displayName?: (string|null);
                }

                /** Represents an ExecutePatchJobRequest. */
                class ExecutePatchJobRequest implements IExecutePatchJobRequest {

                    /**
                     * Constructs a new ExecutePatchJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.IExecutePatchJobRequest);

                    /** ExecutePatchJobRequest parent. */
                    public parent: string;

                    /** ExecutePatchJobRequest description. */
                    public description: string;

                    /** ExecutePatchJobRequest instanceFilter. */
                    public instanceFilter?: (google.cloud.osconfig.v1.IPatchInstanceFilter|null);

                    /** ExecutePatchJobRequest patchConfig. */
                    public patchConfig?: (google.cloud.osconfig.v1.IPatchConfig|null);

                    /** ExecutePatchJobRequest duration. */
                    public duration?: (google.protobuf.IDuration|null);

                    /** ExecutePatchJobRequest dryRun. */
                    public dryRun: boolean;

                    /** ExecutePatchJobRequest displayName. */
                    public displayName: string;

                    /**
                     * Creates a new ExecutePatchJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExecutePatchJobRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.IExecutePatchJobRequest): google.cloud.osconfig.v1.ExecutePatchJobRequest;

                    /**
                     * Encodes the specified ExecutePatchJobRequest message. Does not implicitly {@link google.cloud.osconfig.v1.ExecutePatchJobRequest.verify|verify} messages.
                     * @param message ExecutePatchJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.IExecutePatchJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExecutePatchJobRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.ExecutePatchJobRequest.verify|verify} messages.
                     * @param message ExecutePatchJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.IExecutePatchJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExecutePatchJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExecutePatchJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.ExecutePatchJobRequest;

                    /**
                     * Decodes an ExecutePatchJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExecutePatchJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.ExecutePatchJobRequest;

                    /**
                     * Verifies an ExecutePatchJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExecutePatchJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExecutePatchJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.ExecutePatchJobRequest;

                    /**
                     * Creates a plain object from an ExecutePatchJobRequest message. Also converts values to other types if specified.
                     * @param message ExecutePatchJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.ExecutePatchJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExecutePatchJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetPatchJobRequest. */
                interface IGetPatchJobRequest {

                    /** GetPatchJobRequest name */
                    name?: (string|null);
                }

                /** Represents a GetPatchJobRequest. */
                class GetPatchJobRequest implements IGetPatchJobRequest {

                    /**
                     * Constructs a new GetPatchJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.IGetPatchJobRequest);

                    /** GetPatchJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetPatchJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPatchJobRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.IGetPatchJobRequest): google.cloud.osconfig.v1.GetPatchJobRequest;

                    /**
                     * Encodes the specified GetPatchJobRequest message. Does not implicitly {@link google.cloud.osconfig.v1.GetPatchJobRequest.verify|verify} messages.
                     * @param message GetPatchJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.IGetPatchJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPatchJobRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.GetPatchJobRequest.verify|verify} messages.
                     * @param message GetPatchJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.IGetPatchJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPatchJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPatchJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.GetPatchJobRequest;

                    /**
                     * Decodes a GetPatchJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPatchJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.GetPatchJobRequest;

                    /**
                     * Verifies a GetPatchJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPatchJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPatchJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.GetPatchJobRequest;

                    /**
                     * Creates a plain object from a GetPatchJobRequest message. Also converts values to other types if specified.
                     * @param message GetPatchJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.GetPatchJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPatchJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListPatchJobInstanceDetailsRequest. */
                interface IListPatchJobInstanceDetailsRequest {

                    /** ListPatchJobInstanceDetailsRequest parent */
                    parent?: (string|null);

                    /** ListPatchJobInstanceDetailsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPatchJobInstanceDetailsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListPatchJobInstanceDetailsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListPatchJobInstanceDetailsRequest. */
                class ListPatchJobInstanceDetailsRequest implements IListPatchJobInstanceDetailsRequest {

                    /**
                     * Constructs a new ListPatchJobInstanceDetailsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.IListPatchJobInstanceDetailsRequest);

                    /** ListPatchJobInstanceDetailsRequest parent. */
                    public parent: string;

                    /** ListPatchJobInstanceDetailsRequest pageSize. */
                    public pageSize: number;

                    /** ListPatchJobInstanceDetailsRequest pageToken. */
                    public pageToken: string;

                    /** ListPatchJobInstanceDetailsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListPatchJobInstanceDetailsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPatchJobInstanceDetailsRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.IListPatchJobInstanceDetailsRequest): google.cloud.osconfig.v1.ListPatchJobInstanceDetailsRequest;

                    /**
                     * Encodes the specified ListPatchJobInstanceDetailsRequest message. Does not implicitly {@link google.cloud.osconfig.v1.ListPatchJobInstanceDetailsRequest.verify|verify} messages.
                     * @param message ListPatchJobInstanceDetailsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.IListPatchJobInstanceDetailsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPatchJobInstanceDetailsRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.ListPatchJobInstanceDetailsRequest.verify|verify} messages.
                     * @param message ListPatchJobInstanceDetailsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.IListPatchJobInstanceDetailsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPatchJobInstanceDetailsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPatchJobInstanceDetailsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.ListPatchJobInstanceDetailsRequest;

                    /**
                     * Decodes a ListPatchJobInstanceDetailsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPatchJobInstanceDetailsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.ListPatchJobInstanceDetailsRequest;

                    /**
                     * Verifies a ListPatchJobInstanceDetailsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPatchJobInstanceDetailsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPatchJobInstanceDetailsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.ListPatchJobInstanceDetailsRequest;

                    /**
                     * Creates a plain object from a ListPatchJobInstanceDetailsRequest message. Also converts values to other types if specified.
                     * @param message ListPatchJobInstanceDetailsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.ListPatchJobInstanceDetailsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPatchJobInstanceDetailsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListPatchJobInstanceDetailsResponse. */
                interface IListPatchJobInstanceDetailsResponse {

                    /** ListPatchJobInstanceDetailsResponse patchJobInstanceDetails */
                    patchJobInstanceDetails?: (google.cloud.osconfig.v1.IPatchJobInstanceDetails[]|null);

                    /** ListPatchJobInstanceDetailsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListPatchJobInstanceDetailsResponse. */
                class ListPatchJobInstanceDetailsResponse implements IListPatchJobInstanceDetailsResponse {

                    /**
                     * Constructs a new ListPatchJobInstanceDetailsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.IListPatchJobInstanceDetailsResponse);

                    /** ListPatchJobInstanceDetailsResponse patchJobInstanceDetails. */
                    public patchJobInstanceDetails: google.cloud.osconfig.v1.IPatchJobInstanceDetails[];

                    /** ListPatchJobInstanceDetailsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListPatchJobInstanceDetailsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPatchJobInstanceDetailsResponse instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.IListPatchJobInstanceDetailsResponse): google.cloud.osconfig.v1.ListPatchJobInstanceDetailsResponse;

                    /**
                     * Encodes the specified ListPatchJobInstanceDetailsResponse message. Does not implicitly {@link google.cloud.osconfig.v1.ListPatchJobInstanceDetailsResponse.verify|verify} messages.
                     * @param message ListPatchJobInstanceDetailsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.IListPatchJobInstanceDetailsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPatchJobInstanceDetailsResponse message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.ListPatchJobInstanceDetailsResponse.verify|verify} messages.
                     * @param message ListPatchJobInstanceDetailsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.IListPatchJobInstanceDetailsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPatchJobInstanceDetailsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPatchJobInstanceDetailsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.ListPatchJobInstanceDetailsResponse;

                    /**
                     * Decodes a ListPatchJobInstanceDetailsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPatchJobInstanceDetailsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.ListPatchJobInstanceDetailsResponse;

                    /**
                     * Verifies a ListPatchJobInstanceDetailsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPatchJobInstanceDetailsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPatchJobInstanceDetailsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.ListPatchJobInstanceDetailsResponse;

                    /**
                     * Creates a plain object from a ListPatchJobInstanceDetailsResponse message. Also converts values to other types if specified.
                     * @param message ListPatchJobInstanceDetailsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.ListPatchJobInstanceDetailsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPatchJobInstanceDetailsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PatchJobInstanceDetails. */
                interface IPatchJobInstanceDetails {

                    /** PatchJobInstanceDetails name */
                    name?: (string|null);

                    /** PatchJobInstanceDetails instanceSystemId */
                    instanceSystemId?: (string|null);

                    /** PatchJobInstanceDetails state */
                    state?: (google.cloud.osconfig.v1.Instance.PatchState|keyof typeof google.cloud.osconfig.v1.Instance.PatchState|null);

                    /** PatchJobInstanceDetails failureReason */
                    failureReason?: (string|null);

                    /** PatchJobInstanceDetails attemptCount */
                    attemptCount?: (number|Long|string|null);
                }

                /** Represents a PatchJobInstanceDetails. */
                class PatchJobInstanceDetails implements IPatchJobInstanceDetails {

                    /**
                     * Constructs a new PatchJobInstanceDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.IPatchJobInstanceDetails);

                    /** PatchJobInstanceDetails name. */
                    public name: string;

                    /** PatchJobInstanceDetails instanceSystemId. */
                    public instanceSystemId: string;

                    /** PatchJobInstanceDetails state. */
                    public state: (google.cloud.osconfig.v1.Instance.PatchState|keyof typeof google.cloud.osconfig.v1.Instance.PatchState);

                    /** PatchJobInstanceDetails failureReason. */
                    public failureReason: string;

                    /** PatchJobInstanceDetails attemptCount. */
                    public attemptCount: (number|Long|string);

                    /**
                     * Creates a new PatchJobInstanceDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PatchJobInstanceDetails instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.IPatchJobInstanceDetails): google.cloud.osconfig.v1.PatchJobInstanceDetails;

                    /**
                     * Encodes the specified PatchJobInstanceDetails message. Does not implicitly {@link google.cloud.osconfig.v1.PatchJobInstanceDetails.verify|verify} messages.
                     * @param message PatchJobInstanceDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.IPatchJobInstanceDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PatchJobInstanceDetails message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.PatchJobInstanceDetails.verify|verify} messages.
                     * @param message PatchJobInstanceDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.IPatchJobInstanceDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PatchJobInstanceDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PatchJobInstanceDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.PatchJobInstanceDetails;

                    /**
                     * Decodes a PatchJobInstanceDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PatchJobInstanceDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.PatchJobInstanceDetails;

                    /**
                     * Verifies a PatchJobInstanceDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PatchJobInstanceDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PatchJobInstanceDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.PatchJobInstanceDetails;

                    /**
                     * Creates a plain object from a PatchJobInstanceDetails message. Also converts values to other types if specified.
                     * @param message PatchJobInstanceDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.PatchJobInstanceDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PatchJobInstanceDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListPatchJobsRequest. */
                interface IListPatchJobsRequest {

                    /** ListPatchJobsRequest parent */
                    parent?: (string|null);

                    /** ListPatchJobsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPatchJobsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListPatchJobsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListPatchJobsRequest. */
                class ListPatchJobsRequest implements IListPatchJobsRequest {

                    /**
                     * Constructs a new ListPatchJobsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.IListPatchJobsRequest);

                    /** ListPatchJobsRequest parent. */
                    public parent: string;

                    /** ListPatchJobsRequest pageSize. */
                    public pageSize: number;

                    /** ListPatchJobsRequest pageToken. */
                    public pageToken: string;

                    /** ListPatchJobsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListPatchJobsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPatchJobsRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.IListPatchJobsRequest): google.cloud.osconfig.v1.ListPatchJobsRequest;

                    /**
                     * Encodes the specified ListPatchJobsRequest message. Does not implicitly {@link google.cloud.osconfig.v1.ListPatchJobsRequest.verify|verify} messages.
                     * @param message ListPatchJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.IListPatchJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPatchJobsRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.ListPatchJobsRequest.verify|verify} messages.
                     * @param message ListPatchJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.IListPatchJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPatchJobsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPatchJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.ListPatchJobsRequest;

                    /**
                     * Decodes a ListPatchJobsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPatchJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.ListPatchJobsRequest;

                    /**
                     * Verifies a ListPatchJobsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPatchJobsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPatchJobsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.ListPatchJobsRequest;

                    /**
                     * Creates a plain object from a ListPatchJobsRequest message. Also converts values to other types if specified.
                     * @param message ListPatchJobsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.ListPatchJobsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPatchJobsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListPatchJobsResponse. */
                interface IListPatchJobsResponse {

                    /** ListPatchJobsResponse patchJobs */
                    patchJobs?: (google.cloud.osconfig.v1.IPatchJob[]|null);

                    /** ListPatchJobsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListPatchJobsResponse. */
                class ListPatchJobsResponse implements IListPatchJobsResponse {

                    /**
                     * Constructs a new ListPatchJobsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.IListPatchJobsResponse);

                    /** ListPatchJobsResponse patchJobs. */
                    public patchJobs: google.cloud.osconfig.v1.IPatchJob[];

                    /** ListPatchJobsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListPatchJobsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPatchJobsResponse instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.IListPatchJobsResponse): google.cloud.osconfig.v1.ListPatchJobsResponse;

                    /**
                     * Encodes the specified ListPatchJobsResponse message. Does not implicitly {@link google.cloud.osconfig.v1.ListPatchJobsResponse.verify|verify} messages.
                     * @param message ListPatchJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.IListPatchJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPatchJobsResponse message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.ListPatchJobsResponse.verify|verify} messages.
                     * @param message ListPatchJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.IListPatchJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPatchJobsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPatchJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.ListPatchJobsResponse;

                    /**
                     * Decodes a ListPatchJobsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPatchJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.ListPatchJobsResponse;

                    /**
                     * Verifies a ListPatchJobsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPatchJobsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPatchJobsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.ListPatchJobsResponse;

                    /**
                     * Creates a plain object from a ListPatchJobsResponse message. Also converts values to other types if specified.
                     * @param message ListPatchJobsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.ListPatchJobsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPatchJobsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PatchJob. */
                interface IPatchJob {

                    /** PatchJob name */
                    name?: (string|null);

                    /** PatchJob displayName */
                    displayName?: (string|null);

                    /** PatchJob description */
                    description?: (string|null);

                    /** PatchJob createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** PatchJob updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** PatchJob state */
                    state?: (google.cloud.osconfig.v1.PatchJob.State|keyof typeof google.cloud.osconfig.v1.PatchJob.State|null);

                    /** PatchJob instanceFilter */
                    instanceFilter?: (google.cloud.osconfig.v1.IPatchInstanceFilter|null);

                    /** PatchJob patchConfig */
                    patchConfig?: (google.cloud.osconfig.v1.IPatchConfig|null);

                    /** PatchJob duration */
                    duration?: (google.protobuf.IDuration|null);

                    /** PatchJob instanceDetailsSummary */
                    instanceDetailsSummary?: (google.cloud.osconfig.v1.PatchJob.IInstanceDetailsSummary|null);

                    /** PatchJob dryRun */
                    dryRun?: (boolean|null);

                    /** PatchJob errorMessage */
                    errorMessage?: (string|null);

                    /** PatchJob percentComplete */
                    percentComplete?: (number|null);

                    /** PatchJob patchDeployment */
                    patchDeployment?: (string|null);
                }

                /** Represents a PatchJob. */
                class PatchJob implements IPatchJob {

                    /**
                     * Constructs a new PatchJob.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.IPatchJob);

                    /** PatchJob name. */
                    public name: string;

                    /** PatchJob displayName. */
                    public displayName: string;

                    /** PatchJob description. */
                    public description: string;

                    /** PatchJob createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** PatchJob updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** PatchJob state. */
                    public state: (google.cloud.osconfig.v1.PatchJob.State|keyof typeof google.cloud.osconfig.v1.PatchJob.State);

                    /** PatchJob instanceFilter. */
                    public instanceFilter?: (google.cloud.osconfig.v1.IPatchInstanceFilter|null);

                    /** PatchJob patchConfig. */
                    public patchConfig?: (google.cloud.osconfig.v1.IPatchConfig|null);

                    /** PatchJob duration. */
                    public duration?: (google.protobuf.IDuration|null);

                    /** PatchJob instanceDetailsSummary. */
                    public instanceDetailsSummary?: (google.cloud.osconfig.v1.PatchJob.IInstanceDetailsSummary|null);

                    /** PatchJob dryRun. */
                    public dryRun: boolean;

                    /** PatchJob errorMessage. */
                    public errorMessage: string;

                    /** PatchJob percentComplete. */
                    public percentComplete: number;

                    /** PatchJob patchDeployment. */
                    public patchDeployment: string;

                    /**
                     * Creates a new PatchJob instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PatchJob instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.IPatchJob): google.cloud.osconfig.v1.PatchJob;

                    /**
                     * Encodes the specified PatchJob message. Does not implicitly {@link google.cloud.osconfig.v1.PatchJob.verify|verify} messages.
                     * @param message PatchJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.IPatchJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PatchJob message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.PatchJob.verify|verify} messages.
                     * @param message PatchJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.IPatchJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PatchJob message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PatchJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.PatchJob;

                    /**
                     * Decodes a PatchJob message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PatchJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.PatchJob;

                    /**
                     * Verifies a PatchJob message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PatchJob message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PatchJob
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.PatchJob;

                    /**
                     * Creates a plain object from a PatchJob message. Also converts values to other types if specified.
                     * @param message PatchJob
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.PatchJob, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PatchJob to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace PatchJob {

                    /** Properties of an InstanceDetailsSummary. */
                    interface IInstanceDetailsSummary {

                        /** InstanceDetailsSummary pendingInstanceCount */
                        pendingInstanceCount?: (number|Long|string|null);

                        /** InstanceDetailsSummary inactiveInstanceCount */
                        inactiveInstanceCount?: (number|Long|string|null);

                        /** InstanceDetailsSummary notifiedInstanceCount */
                        notifiedInstanceCount?: (number|Long|string|null);

                        /** InstanceDetailsSummary startedInstanceCount */
                        startedInstanceCount?: (number|Long|string|null);

                        /** InstanceDetailsSummary downloadingPatchesInstanceCount */
                        downloadingPatchesInstanceCount?: (number|Long|string|null);

                        /** InstanceDetailsSummary applyingPatchesInstanceCount */
                        applyingPatchesInstanceCount?: (number|Long|string|null);

                        /** InstanceDetailsSummary rebootingInstanceCount */
                        rebootingInstanceCount?: (number|Long|string|null);

                        /** InstanceDetailsSummary succeededInstanceCount */
                        succeededInstanceCount?: (number|Long|string|null);

                        /** InstanceDetailsSummary succeededRebootRequiredInstanceCount */
                        succeededRebootRequiredInstanceCount?: (number|Long|string|null);

                        /** InstanceDetailsSummary failedInstanceCount */
                        failedInstanceCount?: (number|Long|string|null);

                        /** InstanceDetailsSummary ackedInstanceCount */
                        ackedInstanceCount?: (number|Long|string|null);

                        /** InstanceDetailsSummary timedOutInstanceCount */
                        timedOutInstanceCount?: (number|Long|string|null);

                        /** InstanceDetailsSummary prePatchStepInstanceCount */
                        prePatchStepInstanceCount?: (number|Long|string|null);

                        /** InstanceDetailsSummary postPatchStepInstanceCount */
                        postPatchStepInstanceCount?: (number|Long|string|null);

                        /** InstanceDetailsSummary noAgentDetectedInstanceCount */
                        noAgentDetectedInstanceCount?: (number|Long|string|null);
                    }

                    /** Represents an InstanceDetailsSummary. */
                    class InstanceDetailsSummary implements IInstanceDetailsSummary {

                        /**
                         * Constructs a new InstanceDetailsSummary.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.osconfig.v1.PatchJob.IInstanceDetailsSummary);

                        /** InstanceDetailsSummary pendingInstanceCount. */
                        public pendingInstanceCount: (number|Long|string);

                        /** InstanceDetailsSummary inactiveInstanceCount. */
                        public inactiveInstanceCount: (number|Long|string);

                        /** InstanceDetailsSummary notifiedInstanceCount. */
                        public notifiedInstanceCount: (number|Long|string);

                        /** InstanceDetailsSummary startedInstanceCount. */
                        public startedInstanceCount: (number|Long|string);

                        /** InstanceDetailsSummary downloadingPatchesInstanceCount. */
                        public downloadingPatchesInstanceCount: (number|Long|string);

                        /** InstanceDetailsSummary applyingPatchesInstanceCount. */
                        public applyingPatchesInstanceCount: (number|Long|string);

                        /** InstanceDetailsSummary rebootingInstanceCount. */
                        public rebootingInstanceCount: (number|Long|string);

                        /** InstanceDetailsSummary succeededInstanceCount. */
                        public succeededInstanceCount: (number|Long|string);

                        /** InstanceDetailsSummary succeededRebootRequiredInstanceCount. */
                        public succeededRebootRequiredInstanceCount: (number|Long|string);

                        /** InstanceDetailsSummary failedInstanceCount. */
                        public failedInstanceCount: (number|Long|string);

                        /** InstanceDetailsSummary ackedInstanceCount. */
                        public ackedInstanceCount: (number|Long|string);

                        /** InstanceDetailsSummary timedOutInstanceCount. */
                        public timedOutInstanceCount: (number|Long|string);

                        /** InstanceDetailsSummary prePatchStepInstanceCount. */
                        public prePatchStepInstanceCount: (number|Long|string);

                        /** InstanceDetailsSummary postPatchStepInstanceCount. */
                        public postPatchStepInstanceCount: (number|Long|string);

                        /** InstanceDetailsSummary noAgentDetectedInstanceCount. */
                        public noAgentDetectedInstanceCount: (number|Long|string);

                        /**
                         * Creates a new InstanceDetailsSummary instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InstanceDetailsSummary instance
                         */
                        public static create(properties?: google.cloud.osconfig.v1.PatchJob.IInstanceDetailsSummary): google.cloud.osconfig.v1.PatchJob.InstanceDetailsSummary;

                        /**
                         * Encodes the specified InstanceDetailsSummary message. Does not implicitly {@link google.cloud.osconfig.v1.PatchJob.InstanceDetailsSummary.verify|verify} messages.
                         * @param message InstanceDetailsSummary message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.osconfig.v1.PatchJob.IInstanceDetailsSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InstanceDetailsSummary message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.PatchJob.InstanceDetailsSummary.verify|verify} messages.
                         * @param message InstanceDetailsSummary message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.osconfig.v1.PatchJob.IInstanceDetailsSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InstanceDetailsSummary message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InstanceDetailsSummary
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.PatchJob.InstanceDetailsSummary;

                        /**
                         * Decodes an InstanceDetailsSummary message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InstanceDetailsSummary
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.PatchJob.InstanceDetailsSummary;

                        /**
                         * Verifies an InstanceDetailsSummary message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InstanceDetailsSummary message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InstanceDetailsSummary
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.PatchJob.InstanceDetailsSummary;

                        /**
                         * Creates a plain object from an InstanceDetailsSummary message. Also converts values to other types if specified.
                         * @param message InstanceDetailsSummary
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.osconfig.v1.PatchJob.InstanceDetailsSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InstanceDetailsSummary to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        STARTED = 1,
                        INSTANCE_LOOKUP = 2,
                        PATCHING = 3,
                        SUCCEEDED = 4,
                        COMPLETED_WITH_ERRORS = 5,
                        CANCELED = 6,
                        TIMED_OUT = 7
                    }
                }

                /** Properties of a PatchConfig. */
                interface IPatchConfig {

                    /** PatchConfig rebootConfig */
                    rebootConfig?: (google.cloud.osconfig.v1.PatchConfig.RebootConfig|keyof typeof google.cloud.osconfig.v1.PatchConfig.RebootConfig|null);

                    /** PatchConfig apt */
                    apt?: (google.cloud.osconfig.v1.IAptSettings|null);

                    /** PatchConfig yum */
                    yum?: (google.cloud.osconfig.v1.IYumSettings|null);

                    /** PatchConfig goo */
                    goo?: (google.cloud.osconfig.v1.IGooSettings|null);

                    /** PatchConfig zypper */
                    zypper?: (google.cloud.osconfig.v1.IZypperSettings|null);

                    /** PatchConfig windowsUpdate */
                    windowsUpdate?: (google.cloud.osconfig.v1.IWindowsUpdateSettings|null);

                    /** PatchConfig preStep */
                    preStep?: (google.cloud.osconfig.v1.IExecStep|null);

                    /** PatchConfig postStep */
                    postStep?: (google.cloud.osconfig.v1.IExecStep|null);
                }

                /** Represents a PatchConfig. */
                class PatchConfig implements IPatchConfig {

                    /**
                     * Constructs a new PatchConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.IPatchConfig);

                    /** PatchConfig rebootConfig. */
                    public rebootConfig: (google.cloud.osconfig.v1.PatchConfig.RebootConfig|keyof typeof google.cloud.osconfig.v1.PatchConfig.RebootConfig);

                    /** PatchConfig apt. */
                    public apt?: (google.cloud.osconfig.v1.IAptSettings|null);

                    /** PatchConfig yum. */
                    public yum?: (google.cloud.osconfig.v1.IYumSettings|null);

                    /** PatchConfig goo. */
                    public goo?: (google.cloud.osconfig.v1.IGooSettings|null);

                    /** PatchConfig zypper. */
                    public zypper?: (google.cloud.osconfig.v1.IZypperSettings|null);

                    /** PatchConfig windowsUpdate. */
                    public windowsUpdate?: (google.cloud.osconfig.v1.IWindowsUpdateSettings|null);

                    /** PatchConfig preStep. */
                    public preStep?: (google.cloud.osconfig.v1.IExecStep|null);

                    /** PatchConfig postStep. */
                    public postStep?: (google.cloud.osconfig.v1.IExecStep|null);

                    /**
                     * Creates a new PatchConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PatchConfig instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.IPatchConfig): google.cloud.osconfig.v1.PatchConfig;

                    /**
                     * Encodes the specified PatchConfig message. Does not implicitly {@link google.cloud.osconfig.v1.PatchConfig.verify|verify} messages.
                     * @param message PatchConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.IPatchConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PatchConfig message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.PatchConfig.verify|verify} messages.
                     * @param message PatchConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.IPatchConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PatchConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PatchConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.PatchConfig;

                    /**
                     * Decodes a PatchConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PatchConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.PatchConfig;

                    /**
                     * Verifies a PatchConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PatchConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PatchConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.PatchConfig;

                    /**
                     * Creates a plain object from a PatchConfig message. Also converts values to other types if specified.
                     * @param message PatchConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.PatchConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PatchConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace PatchConfig {

                    /** RebootConfig enum. */
                    enum RebootConfig {
                        REBOOT_CONFIG_UNSPECIFIED = 0,
                        DEFAULT = 1,
                        ALWAYS = 2,
                        NEVER = 3
                    }
                }

                /** Properties of an Instance. */
                interface IInstance {
                }

                /** Represents an Instance. */
                class Instance implements IInstance {

                    /**
                     * Constructs a new Instance.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.IInstance);

                    /**
                     * Creates a new Instance instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Instance instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.IInstance): google.cloud.osconfig.v1.Instance;

                    /**
                     * Encodes the specified Instance message. Does not implicitly {@link google.cloud.osconfig.v1.Instance.verify|verify} messages.
                     * @param message Instance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.IInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Instance message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.Instance.verify|verify} messages.
                     * @param message Instance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.IInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Instance message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Instance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.Instance;

                    /**
                     * Decodes an Instance message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Instance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.Instance;

                    /**
                     * Verifies an Instance message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Instance message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Instance
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.Instance;

                    /**
                     * Creates a plain object from an Instance message. Also converts values to other types if specified.
                     * @param message Instance
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.Instance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Instance to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Instance {

                    /** PatchState enum. */
                    enum PatchState {
                        PATCH_STATE_UNSPECIFIED = 0,
                        PENDING = 1,
                        INACTIVE = 2,
                        NOTIFIED = 3,
                        STARTED = 4,
                        DOWNLOADING_PATCHES = 5,
                        APPLYING_PATCHES = 6,
                        REBOOTING = 7,
                        SUCCEEDED = 8,
                        SUCCEEDED_REBOOT_REQUIRED = 9,
                        FAILED = 10,
                        ACKED = 11,
                        TIMED_OUT = 12,
                        RUNNING_PRE_PATCH_STEP = 13,
                        RUNNING_POST_PATCH_STEP = 14,
                        NO_AGENT_DETECTED = 15
                    }
                }

                /** Properties of a CancelPatchJobRequest. */
                interface ICancelPatchJobRequest {

                    /** CancelPatchJobRequest name */
                    name?: (string|null);
                }

                /** Represents a CancelPatchJobRequest. */
                class CancelPatchJobRequest implements ICancelPatchJobRequest {

                    /**
                     * Constructs a new CancelPatchJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.ICancelPatchJobRequest);

                    /** CancelPatchJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new CancelPatchJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CancelPatchJobRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.ICancelPatchJobRequest): google.cloud.osconfig.v1.CancelPatchJobRequest;

                    /**
                     * Encodes the specified CancelPatchJobRequest message. Does not implicitly {@link google.cloud.osconfig.v1.CancelPatchJobRequest.verify|verify} messages.
                     * @param message CancelPatchJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.ICancelPatchJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CancelPatchJobRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.CancelPatchJobRequest.verify|verify} messages.
                     * @param message CancelPatchJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.ICancelPatchJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CancelPatchJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CancelPatchJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.CancelPatchJobRequest;

                    /**
                     * Decodes a CancelPatchJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CancelPatchJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.CancelPatchJobRequest;

                    /**
                     * Verifies a CancelPatchJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CancelPatchJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CancelPatchJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.CancelPatchJobRequest;

                    /**
                     * Creates a plain object from a CancelPatchJobRequest message. Also converts values to other types if specified.
                     * @param message CancelPatchJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.CancelPatchJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CancelPatchJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AptSettings. */
                interface IAptSettings {

                    /** AptSettings type */
                    type?: (google.cloud.osconfig.v1.AptSettings.Type|keyof typeof google.cloud.osconfig.v1.AptSettings.Type|null);

                    /** AptSettings excludes */
                    excludes?: (string[]|null);

                    /** AptSettings exclusivePackages */
                    exclusivePackages?: (string[]|null);
                }

                /** Represents an AptSettings. */
                class AptSettings implements IAptSettings {

                    /**
                     * Constructs a new AptSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.IAptSettings);

                    /** AptSettings type. */
                    public type: (google.cloud.osconfig.v1.AptSettings.Type|keyof typeof google.cloud.osconfig.v1.AptSettings.Type);

                    /** AptSettings excludes. */
                    public excludes: string[];

                    /** AptSettings exclusivePackages. */
                    public exclusivePackages: string[];

                    /**
                     * Creates a new AptSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AptSettings instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.IAptSettings): google.cloud.osconfig.v1.AptSettings;

                    /**
                     * Encodes the specified AptSettings message. Does not implicitly {@link google.cloud.osconfig.v1.AptSettings.verify|verify} messages.
                     * @param message AptSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.IAptSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AptSettings message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.AptSettings.verify|verify} messages.
                     * @param message AptSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.IAptSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AptSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AptSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.AptSettings;

                    /**
                     * Decodes an AptSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AptSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.AptSettings;

                    /**
                     * Verifies an AptSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AptSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AptSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.AptSettings;

                    /**
                     * Creates a plain object from an AptSettings message. Also converts values to other types if specified.
                     * @param message AptSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.AptSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AptSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace AptSettings {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        DIST = 1,
                        UPGRADE = 2
                    }
                }

                /** Properties of a YumSettings. */
                interface IYumSettings {

                    /** YumSettings security */
                    security?: (boolean|null);

                    /** YumSettings minimal */
                    minimal?: (boolean|null);

                    /** YumSettings excludes */
                    excludes?: (string[]|null);

                    /** YumSettings exclusivePackages */
                    exclusivePackages?: (string[]|null);
                }

                /** Represents a YumSettings. */
                class YumSettings implements IYumSettings {

                    /**
                     * Constructs a new YumSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.IYumSettings);

                    /** YumSettings security. */
                    public security: boolean;

                    /** YumSettings minimal. */
                    public minimal: boolean;

                    /** YumSettings excludes. */
                    public excludes: string[];

                    /** YumSettings exclusivePackages. */
                    public exclusivePackages: string[];

                    /**
                     * Creates a new YumSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns YumSettings instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.IYumSettings): google.cloud.osconfig.v1.YumSettings;

                    /**
                     * Encodes the specified YumSettings message. Does not implicitly {@link google.cloud.osconfig.v1.YumSettings.verify|verify} messages.
                     * @param message YumSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.IYumSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified YumSettings message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.YumSettings.verify|verify} messages.
                     * @param message YumSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.IYumSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a YumSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns YumSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.YumSettings;

                    /**
                     * Decodes a YumSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns YumSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.YumSettings;

                    /**
                     * Verifies a YumSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a YumSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns YumSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.YumSettings;

                    /**
                     * Creates a plain object from a YumSettings message. Also converts values to other types if specified.
                     * @param message YumSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.YumSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this YumSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GooSettings. */
                interface IGooSettings {
                }

                /** Represents a GooSettings. */
                class GooSettings implements IGooSettings {

                    /**
                     * Constructs a new GooSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.IGooSettings);

                    /**
                     * Creates a new GooSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GooSettings instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.IGooSettings): google.cloud.osconfig.v1.GooSettings;

                    /**
                     * Encodes the specified GooSettings message. Does not implicitly {@link google.cloud.osconfig.v1.GooSettings.verify|verify} messages.
                     * @param message GooSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.IGooSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GooSettings message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.GooSettings.verify|verify} messages.
                     * @param message GooSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.IGooSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GooSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GooSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.GooSettings;

                    /**
                     * Decodes a GooSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GooSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.GooSettings;

                    /**
                     * Verifies a GooSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GooSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GooSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.GooSettings;

                    /**
                     * Creates a plain object from a GooSettings message. Also converts values to other types if specified.
                     * @param message GooSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.GooSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GooSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ZypperSettings. */
                interface IZypperSettings {

                    /** ZypperSettings withOptional */
                    withOptional?: (boolean|null);

                    /** ZypperSettings withUpdate */
                    withUpdate?: (boolean|null);

                    /** ZypperSettings categories */
                    categories?: (string[]|null);

                    /** ZypperSettings severities */
                    severities?: (string[]|null);

                    /** ZypperSettings excludes */
                    excludes?: (string[]|null);

                    /** ZypperSettings exclusivePatches */
                    exclusivePatches?: (string[]|null);
                }

                /** Represents a ZypperSettings. */
                class ZypperSettings implements IZypperSettings {

                    /**
                     * Constructs a new ZypperSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.IZypperSettings);

                    /** ZypperSettings withOptional. */
                    public withOptional: boolean;

                    /** ZypperSettings withUpdate. */
                    public withUpdate: boolean;

                    /** ZypperSettings categories. */
                    public categories: string[];

                    /** ZypperSettings severities. */
                    public severities: string[];

                    /** ZypperSettings excludes. */
                    public excludes: string[];

                    /** ZypperSettings exclusivePatches. */
                    public exclusivePatches: string[];

                    /**
                     * Creates a new ZypperSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ZypperSettings instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.IZypperSettings): google.cloud.osconfig.v1.ZypperSettings;

                    /**
                     * Encodes the specified ZypperSettings message. Does not implicitly {@link google.cloud.osconfig.v1.ZypperSettings.verify|verify} messages.
                     * @param message ZypperSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.IZypperSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ZypperSettings message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.ZypperSettings.verify|verify} messages.
                     * @param message ZypperSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.IZypperSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ZypperSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ZypperSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.ZypperSettings;

                    /**
                     * Decodes a ZypperSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ZypperSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.ZypperSettings;

                    /**
                     * Verifies a ZypperSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ZypperSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ZypperSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.ZypperSettings;

                    /**
                     * Creates a plain object from a ZypperSettings message. Also converts values to other types if specified.
                     * @param message ZypperSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.ZypperSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ZypperSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a WindowsUpdateSettings. */
                interface IWindowsUpdateSettings {

                    /** WindowsUpdateSettings classifications */
                    classifications?: (google.cloud.osconfig.v1.WindowsUpdateSettings.Classification[]|null);

                    /** WindowsUpdateSettings excludes */
                    excludes?: (string[]|null);

                    /** WindowsUpdateSettings exclusivePatches */
                    exclusivePatches?: (string[]|null);
                }

                /** Represents a WindowsUpdateSettings. */
                class WindowsUpdateSettings implements IWindowsUpdateSettings {

                    /**
                     * Constructs a new WindowsUpdateSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.IWindowsUpdateSettings);

                    /** WindowsUpdateSettings classifications. */
                    public classifications: google.cloud.osconfig.v1.WindowsUpdateSettings.Classification[];

                    /** WindowsUpdateSettings excludes. */
                    public excludes: string[];

                    /** WindowsUpdateSettings exclusivePatches. */
                    public exclusivePatches: string[];

                    /**
                     * Creates a new WindowsUpdateSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WindowsUpdateSettings instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.IWindowsUpdateSettings): google.cloud.osconfig.v1.WindowsUpdateSettings;

                    /**
                     * Encodes the specified WindowsUpdateSettings message. Does not implicitly {@link google.cloud.osconfig.v1.WindowsUpdateSettings.verify|verify} messages.
                     * @param message WindowsUpdateSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.IWindowsUpdateSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WindowsUpdateSettings message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.WindowsUpdateSettings.verify|verify} messages.
                     * @param message WindowsUpdateSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.IWindowsUpdateSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WindowsUpdateSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WindowsUpdateSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.WindowsUpdateSettings;

                    /**
                     * Decodes a WindowsUpdateSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WindowsUpdateSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.WindowsUpdateSettings;

                    /**
                     * Verifies a WindowsUpdateSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WindowsUpdateSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WindowsUpdateSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.WindowsUpdateSettings;

                    /**
                     * Creates a plain object from a WindowsUpdateSettings message. Also converts values to other types if specified.
                     * @param message WindowsUpdateSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.WindowsUpdateSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WindowsUpdateSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace WindowsUpdateSettings {

                    /** Classification enum. */
                    enum Classification {
                        CLASSIFICATION_UNSPECIFIED = 0,
                        CRITICAL = 1,
                        SECURITY = 2,
                        DEFINITION = 3,
                        DRIVER = 4,
                        FEATURE_PACK = 5,
                        SERVICE_PACK = 6,
                        TOOL = 7,
                        UPDATE_ROLLUP = 8,
                        UPDATE = 9
                    }
                }

                /** Properties of an ExecStep. */
                interface IExecStep {

                    /** ExecStep linuxExecStepConfig */
                    linuxExecStepConfig?: (google.cloud.osconfig.v1.IExecStepConfig|null);

                    /** ExecStep windowsExecStepConfig */
                    windowsExecStepConfig?: (google.cloud.osconfig.v1.IExecStepConfig|null);
                }

                /** Represents an ExecStep. */
                class ExecStep implements IExecStep {

                    /**
                     * Constructs a new ExecStep.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.IExecStep);

                    /** ExecStep linuxExecStepConfig. */
                    public linuxExecStepConfig?: (google.cloud.osconfig.v1.IExecStepConfig|null);

                    /** ExecStep windowsExecStepConfig. */
                    public windowsExecStepConfig?: (google.cloud.osconfig.v1.IExecStepConfig|null);

                    /**
                     * Creates a new ExecStep instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExecStep instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.IExecStep): google.cloud.osconfig.v1.ExecStep;

                    /**
                     * Encodes the specified ExecStep message. Does not implicitly {@link google.cloud.osconfig.v1.ExecStep.verify|verify} messages.
                     * @param message ExecStep message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.IExecStep, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExecStep message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.ExecStep.verify|verify} messages.
                     * @param message ExecStep message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.IExecStep, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExecStep message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExecStep
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.ExecStep;

                    /**
                     * Decodes an ExecStep message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExecStep
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.ExecStep;

                    /**
                     * Verifies an ExecStep message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExecStep message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExecStep
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.ExecStep;

                    /**
                     * Creates a plain object from an ExecStep message. Also converts values to other types if specified.
                     * @param message ExecStep
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.ExecStep, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExecStep to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ExecStepConfig. */
                interface IExecStepConfig {

                    /** ExecStepConfig localPath */
                    localPath?: (string|null);

                    /** ExecStepConfig gcsObject */
                    gcsObject?: (google.cloud.osconfig.v1.IGcsObject|null);

                    /** ExecStepConfig allowedSuccessCodes */
                    allowedSuccessCodes?: (number[]|null);

                    /** ExecStepConfig interpreter */
                    interpreter?: (google.cloud.osconfig.v1.ExecStepConfig.Interpreter|keyof typeof google.cloud.osconfig.v1.ExecStepConfig.Interpreter|null);
                }

                /** Represents an ExecStepConfig. */
                class ExecStepConfig implements IExecStepConfig {

                    /**
                     * Constructs a new ExecStepConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.IExecStepConfig);

                    /** ExecStepConfig localPath. */
                    public localPath: string;

                    /** ExecStepConfig gcsObject. */
                    public gcsObject?: (google.cloud.osconfig.v1.IGcsObject|null);

                    /** ExecStepConfig allowedSuccessCodes. */
                    public allowedSuccessCodes: number[];

                    /** ExecStepConfig interpreter. */
                    public interpreter: (google.cloud.osconfig.v1.ExecStepConfig.Interpreter|keyof typeof google.cloud.osconfig.v1.ExecStepConfig.Interpreter);

                    /** ExecStepConfig executable. */
                    public executable?: ("localPath"|"gcsObject");

                    /**
                     * Creates a new ExecStepConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExecStepConfig instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.IExecStepConfig): google.cloud.osconfig.v1.ExecStepConfig;

                    /**
                     * Encodes the specified ExecStepConfig message. Does not implicitly {@link google.cloud.osconfig.v1.ExecStepConfig.verify|verify} messages.
                     * @param message ExecStepConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.IExecStepConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExecStepConfig message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.ExecStepConfig.verify|verify} messages.
                     * @param message ExecStepConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.IExecStepConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExecStepConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExecStepConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.ExecStepConfig;

                    /**
                     * Decodes an ExecStepConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExecStepConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.ExecStepConfig;

                    /**
                     * Verifies an ExecStepConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExecStepConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExecStepConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.ExecStepConfig;

                    /**
                     * Creates a plain object from an ExecStepConfig message. Also converts values to other types if specified.
                     * @param message ExecStepConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.ExecStepConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExecStepConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ExecStepConfig {

                    /** Interpreter enum. */
                    enum Interpreter {
                        INTERPRETER_UNSPECIFIED = 0,
                        SHELL = 1,
                        POWERSHELL = 2
                    }
                }

                /** Properties of a GcsObject. */
                interface IGcsObject {

                    /** GcsObject bucket */
                    bucket?: (string|null);

                    /** GcsObject object */
                    object?: (string|null);

                    /** GcsObject generationNumber */
                    generationNumber?: (number|Long|string|null);
                }

                /** Represents a GcsObject. */
                class GcsObject implements IGcsObject {

                    /**
                     * Constructs a new GcsObject.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.IGcsObject);

                    /** GcsObject bucket. */
                    public bucket: string;

                    /** GcsObject object. */
                    public object: string;

                    /** GcsObject generationNumber. */
                    public generationNumber: (number|Long|string);

                    /**
                     * Creates a new GcsObject instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsObject instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.IGcsObject): google.cloud.osconfig.v1.GcsObject;

                    /**
                     * Encodes the specified GcsObject message. Does not implicitly {@link google.cloud.osconfig.v1.GcsObject.verify|verify} messages.
                     * @param message GcsObject message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.IGcsObject, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsObject message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.GcsObject.verify|verify} messages.
                     * @param message GcsObject message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.IGcsObject, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsObject message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsObject
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.GcsObject;

                    /**
                     * Decodes a GcsObject message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsObject
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.GcsObject;

                    /**
                     * Verifies a GcsObject message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsObject message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsObject
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.GcsObject;

                    /**
                     * Creates a plain object from a GcsObject message. Also converts values to other types if specified.
                     * @param message GcsObject
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.GcsObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsObject to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PatchInstanceFilter. */
                interface IPatchInstanceFilter {

                    /** PatchInstanceFilter all */
                    all?: (boolean|null);

                    /** PatchInstanceFilter groupLabels */
                    groupLabels?: (google.cloud.osconfig.v1.PatchInstanceFilter.IGroupLabel[]|null);

                    /** PatchInstanceFilter zones */
                    zones?: (string[]|null);

                    /** PatchInstanceFilter instances */
                    instances?: (string[]|null);

                    /** PatchInstanceFilter instanceNamePrefixes */
                    instanceNamePrefixes?: (string[]|null);
                }

                /** Represents a PatchInstanceFilter. */
                class PatchInstanceFilter implements IPatchInstanceFilter {

                    /**
                     * Constructs a new PatchInstanceFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1.IPatchInstanceFilter);

                    /** PatchInstanceFilter all. */
                    public all: boolean;

                    /** PatchInstanceFilter groupLabels. */
                    public groupLabels: google.cloud.osconfig.v1.PatchInstanceFilter.IGroupLabel[];

                    /** PatchInstanceFilter zones. */
                    public zones: string[];

                    /** PatchInstanceFilter instances. */
                    public instances: string[];

                    /** PatchInstanceFilter instanceNamePrefixes. */
                    public instanceNamePrefixes: string[];

                    /**
                     * Creates a new PatchInstanceFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PatchInstanceFilter instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1.IPatchInstanceFilter): google.cloud.osconfig.v1.PatchInstanceFilter;

                    /**
                     * Encodes the specified PatchInstanceFilter message. Does not implicitly {@link google.cloud.osconfig.v1.PatchInstanceFilter.verify|verify} messages.
                     * @param message PatchInstanceFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1.IPatchInstanceFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PatchInstanceFilter message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.PatchInstanceFilter.verify|verify} messages.
                     * @param message PatchInstanceFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1.IPatchInstanceFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PatchInstanceFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PatchInstanceFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.PatchInstanceFilter;

                    /**
                     * Decodes a PatchInstanceFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PatchInstanceFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.PatchInstanceFilter;

                    /**
                     * Verifies a PatchInstanceFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PatchInstanceFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PatchInstanceFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.PatchInstanceFilter;

                    /**
                     * Creates a plain object from a PatchInstanceFilter message. Also converts values to other types if specified.
                     * @param message PatchInstanceFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1.PatchInstanceFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PatchInstanceFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace PatchInstanceFilter {

                    /** Properties of a GroupLabel. */
                    interface IGroupLabel {

                        /** GroupLabel labels */
                        labels?: ({ [k: string]: string }|null);
                    }

                    /** Represents a GroupLabel. */
                    class GroupLabel implements IGroupLabel {

                        /**
                         * Constructs a new GroupLabel.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.osconfig.v1.PatchInstanceFilter.IGroupLabel);

                        /** GroupLabel labels. */
                        public labels: { [k: string]: string };

                        /**
                         * Creates a new GroupLabel instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GroupLabel instance
                         */
                        public static create(properties?: google.cloud.osconfig.v1.PatchInstanceFilter.IGroupLabel): google.cloud.osconfig.v1.PatchInstanceFilter.GroupLabel;

                        /**
                         * Encodes the specified GroupLabel message. Does not implicitly {@link google.cloud.osconfig.v1.PatchInstanceFilter.GroupLabel.verify|verify} messages.
                         * @param message GroupLabel message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.osconfig.v1.PatchInstanceFilter.IGroupLabel, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GroupLabel message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1.PatchInstanceFilter.GroupLabel.verify|verify} messages.
                         * @param message GroupLabel message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.osconfig.v1.PatchInstanceFilter.IGroupLabel, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GroupLabel message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GroupLabel
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1.PatchInstanceFilter.GroupLabel;

                        /**
                         * Decodes a GroupLabel message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GroupLabel
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1.PatchInstanceFilter.GroupLabel;

                        /**
                         * Verifies a GroupLabel message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GroupLabel message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GroupLabel
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1.PatchInstanceFilter.GroupLabel;

                        /**
                         * Creates a plain object from a GroupLabel message. Also converts values to other types if specified.
                         * @param message GroupLabel
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.osconfig.v1.PatchInstanceFilter.GroupLabel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GroupLabel to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }
        }
    }

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fullyDecodeReservedExpansion */
            fullyDecodeReservedExpansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fullyDecodeReservedExpansion. */
            public fullyDecodeReservedExpansion: boolean;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule responseBody */
            responseBody?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get: string;

            /** HttpRule put. */
            public put: string;

            /** HttpRule post. */
            public post: string;

            /** HttpRule delete. */
            public delete: string;

            /** HttpRule patch. */
            public patch: string;

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule responseBody. */
            public responseBody: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResourceDescriptor. */
        interface IResourceDescriptor {

            /** ResourceDescriptor type */
            type?: (string|null);

            /** ResourceDescriptor pattern */
            pattern?: (string[]|null);

            /** ResourceDescriptor nameField */
            nameField?: (string|null);

            /** ResourceDescriptor history */
            history?: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History|null);

            /** ResourceDescriptor plural */
            plural?: (string|null);

            /** ResourceDescriptor singular */
            singular?: (string|null);
        }

        /** Represents a ResourceDescriptor. */
        class ResourceDescriptor implements IResourceDescriptor {

            /**
             * Constructs a new ResourceDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceDescriptor);

            /** ResourceDescriptor type. */
            public type: string;

            /** ResourceDescriptor pattern. */
            public pattern: string[];

            /** ResourceDescriptor nameField. */
            public nameField: string;

            /** ResourceDescriptor history. */
            public history: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History);

            /** ResourceDescriptor plural. */
            public plural: string;

            /** ResourceDescriptor singular. */
            public singular: string;

            /**
             * Creates a new ResourceDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceDescriptor instance
             */
            public static create(properties?: google.api.IResourceDescriptor): google.api.ResourceDescriptor;

            /**
             * Encodes the specified ResourceDescriptor message. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceDescriptor message, length delimited. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceDescriptor;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceDescriptor;

            /**
             * Verifies a ResourceDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceDescriptor;

            /**
             * Creates a plain object from a ResourceDescriptor message. Also converts values to other types if specified.
             * @param message ResourceDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ResourceDescriptor {

            /** History enum. */
            enum History {
                HISTORY_UNSPECIFIED = 0,
                ORIGINALLY_SINGLE_PATTERN = 1,
                FUTURE_MULTI_PATTERN = 2
            }
        }

        /** Properties of a ResourceReference. */
        interface IResourceReference {

            /** ResourceReference type */
            type?: (string|null);

            /** ResourceReference childType */
            childType?: (string|null);
        }

        /** Represents a ResourceReference. */
        class ResourceReference implements IResourceReference {

            /**
             * Constructs a new ResourceReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceReference);

            /** ResourceReference type. */
            public type: string;

            /** ResourceReference childType. */
            public childType: string;

            /**
             * Creates a new ResourceReference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceReference instance
             */
            public static create(properties?: google.api.IResourceReference): google.api.ResourceReference;

            /**
             * Encodes the specified ResourceReference message. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceReference message, length delimited. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceReference;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceReference;

            /**
             * Verifies a ResourceReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceReference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceReference
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceReference;

            /**
             * Creates a plain object from a ResourceReference message. Also converts values to other types if specified.
             * @param message ResourceReference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceReference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** FieldBehavior enum. */
        enum FieldBehavior {
            FIELD_BEHAVIOR_UNSPECIFIED = 0,
            OPTIONAL = 1,
            REQUIRED = 2,
            OUTPUT_ONLY = 3,
            INPUT_ONLY = 4,
            IMMUTABLE = 5
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label);

            /** FieldDescriptorProto type. */
            public type: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type);

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions phpGenericServices */
            phpGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .google.api.resourceDefinition */
            ".google.api.resourceDefinition"?: (google.api.IResourceDescriptor[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode);

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions phpGenericServices. */
            public phpGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .google.api.resource */
            ".google.api.resource"?: (google.api.IResourceDescriptor|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType);

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType);

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel);

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|string|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|string|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|string|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long|string);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long|string);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: (Uint8Array|string);

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|string|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long|string);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|string|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long|string);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace type. */
    namespace type {

        /** Properties of a DateTime. */
        interface IDateTime {

            /** DateTime year */
            year?: (number|null);

            /** DateTime month */
            month?: (number|null);

            /** DateTime day */
            day?: (number|null);

            /** DateTime hours */
            hours?: (number|null);

            /** DateTime minutes */
            minutes?: (number|null);

            /** DateTime seconds */
            seconds?: (number|null);

            /** DateTime nanos */
            nanos?: (number|null);

            /** DateTime utcOffset */
            utcOffset?: (google.protobuf.IDuration|null);

            /** DateTime timeZone */
            timeZone?: (google.type.ITimeZone|null);
        }

        /** Represents a DateTime. */
        class DateTime implements IDateTime {

            /**
             * Constructs a new DateTime.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IDateTime);

            /** DateTime year. */
            public year: number;

            /** DateTime month. */
            public month: number;

            /** DateTime day. */
            public day: number;

            /** DateTime hours. */
            public hours: number;

            /** DateTime minutes. */
            public minutes: number;

            /** DateTime seconds. */
            public seconds: number;

            /** DateTime nanos. */
            public nanos: number;

            /** DateTime utcOffset. */
            public utcOffset?: (google.protobuf.IDuration|null);

            /** DateTime timeZone. */
            public timeZone?: (google.type.ITimeZone|null);

            /** DateTime timeOffset. */
            public timeOffset?: ("utcOffset"|"timeZone");

            /**
             * Creates a new DateTime instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DateTime instance
             */
            public static create(properties?: google.type.IDateTime): google.type.DateTime;

            /**
             * Encodes the specified DateTime message. Does not implicitly {@link google.type.DateTime.verify|verify} messages.
             * @param message DateTime message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IDateTime, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DateTime message, length delimited. Does not implicitly {@link google.type.DateTime.verify|verify} messages.
             * @param message DateTime message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IDateTime, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DateTime message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DateTime
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.DateTime;

            /**
             * Decodes a DateTime message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DateTime
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.DateTime;

            /**
             * Verifies a DateTime message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DateTime message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DateTime
             */
            public static fromObject(object: { [k: string]: any }): google.type.DateTime;

            /**
             * Creates a plain object from a DateTime message. Also converts values to other types if specified.
             * @param message DateTime
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.DateTime, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DateTime to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TimeZone. */
        interface ITimeZone {

            /** TimeZone id */
            id?: (string|null);

            /** TimeZone version */
            version?: (string|null);
        }

        /** Represents a TimeZone. */
        class TimeZone implements ITimeZone {

            /**
             * Constructs a new TimeZone.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.ITimeZone);

            /** TimeZone id. */
            public id: string;

            /** TimeZone version. */
            public version: string;

            /**
             * Creates a new TimeZone instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TimeZone instance
             */
            public static create(properties?: google.type.ITimeZone): google.type.TimeZone;

            /**
             * Encodes the specified TimeZone message. Does not implicitly {@link google.type.TimeZone.verify|verify} messages.
             * @param message TimeZone message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.ITimeZone, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TimeZone message, length delimited. Does not implicitly {@link google.type.TimeZone.verify|verify} messages.
             * @param message TimeZone message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.ITimeZone, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TimeZone message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TimeZone
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.TimeZone;

            /**
             * Decodes a TimeZone message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TimeZone
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.TimeZone;

            /**
             * Verifies a TimeZone message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TimeZone message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TimeZone
             */
            public static fromObject(object: { [k: string]: any }): google.type.TimeZone;

            /**
             * Creates a plain object from a TimeZone message. Also converts values to other types if specified.
             * @param message TimeZone
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.TimeZone, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TimeZone to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** DayOfWeek enum. */
        enum DayOfWeek {
            DAY_OF_WEEK_UNSPECIFIED = 0,
            MONDAY = 1,
            TUESDAY = 2,
            WEDNESDAY = 3,
            THURSDAY = 4,
            FRIDAY = 5,
            SATURDAY = 6,
            SUNDAY = 7
        }

        /** Properties of a TimeOfDay. */
        interface ITimeOfDay {

            /** TimeOfDay hours */
            hours?: (number|null);

            /** TimeOfDay minutes */
            minutes?: (number|null);

            /** TimeOfDay seconds */
            seconds?: (number|null);

            /** TimeOfDay nanos */
            nanos?: (number|null);
        }

        /** Represents a TimeOfDay. */
        class TimeOfDay implements ITimeOfDay {

            /**
             * Constructs a new TimeOfDay.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.ITimeOfDay);

            /** TimeOfDay hours. */
            public hours: number;

            /** TimeOfDay minutes. */
            public minutes: number;

            /** TimeOfDay seconds. */
            public seconds: number;

            /** TimeOfDay nanos. */
            public nanos: number;

            /**
             * Creates a new TimeOfDay instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TimeOfDay instance
             */
            public static create(properties?: google.type.ITimeOfDay): google.type.TimeOfDay;

            /**
             * Encodes the specified TimeOfDay message. Does not implicitly {@link google.type.TimeOfDay.verify|verify} messages.
             * @param message TimeOfDay message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.ITimeOfDay, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TimeOfDay message, length delimited. Does not implicitly {@link google.type.TimeOfDay.verify|verify} messages.
             * @param message TimeOfDay message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.ITimeOfDay, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TimeOfDay message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TimeOfDay
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.TimeOfDay;

            /**
             * Decodes a TimeOfDay message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TimeOfDay
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.TimeOfDay;

            /**
             * Verifies a TimeOfDay message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TimeOfDay message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TimeOfDay
             */
            public static fromObject(object: { [k: string]: any }): google.type.TimeOfDay;

            /**
             * Creates a plain object from a TimeOfDay message. Also converts values to other types if specified.
             * @param message TimeOfDay
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.TimeOfDay, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TimeOfDay to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
