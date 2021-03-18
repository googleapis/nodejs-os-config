// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as agentendpointserviceModule from '../src';

import {PassThrough} from 'stream';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (instance.constructor as typeof protobuf.Message).toObject(
    instance as protobuf.Message<T>,
    {defaults: true}
  );
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

function stubServerStreamingCall<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  const transformStub = error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
  const mockStream = new PassThrough({
    objectMode: true,
    transform: transformStub,
  });
  // write something to the stream to trigger transformStub and send the response back to the client
  setImmediate(() => {
    mockStream.write({});
  });
  setImmediate(() => {
    mockStream.end();
  });
  return sinon.stub().returns(mockStream);
}

describe('v1.AgentEndpointServiceClient', () => {
  it('has servicePath', () => {
    const servicePath =
      agentendpointserviceModule.v1.AgentEndpointServiceClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      agentendpointserviceModule.v1.AgentEndpointServiceClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = agentendpointserviceModule.v1.AgentEndpointServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new agentendpointserviceModule.v1.AgentEndpointServiceClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new agentendpointserviceModule.v1.AgentEndpointServiceClient(
      {
        fallback: true,
      }
    );
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new agentendpointserviceModule.v1.AgentEndpointServiceClient(
      {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      }
    );
    assert.strictEqual(client.agentEndpointServiceStub, undefined);
    await client.initialize();
    assert(client.agentEndpointServiceStub);
  });

  it('has close method', () => {
    const client = new agentendpointserviceModule.v1.AgentEndpointServiceClient(
      {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      }
    );
    client.close();
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new agentendpointserviceModule.v1.AgentEndpointServiceClient(
      {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      }
    );
    client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
    const result = await client.getProjectId();
    assert.strictEqual(result, fakeProjectId);
    assert((client.auth.getProjectId as SinonStub).calledWithExactly());
  });

  it('has getProjectId method with callback', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new agentendpointserviceModule.v1.AgentEndpointServiceClient(
      {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      }
    );
    client.auth.getProjectId = sinon
      .stub()
      .callsArgWith(0, null, fakeProjectId);
    const promise = new Promise((resolve, reject) => {
      client.getProjectId((err?: Error | null, projectId?: string | null) => {
        if (err) {
          reject(err);
        } else {
          resolve(projectId);
        }
      });
    });
    const result = await promise;
    assert.strictEqual(result, fakeProjectId);
  });

  describe('startNextTask', () => {
    it('invokes startNextTask without error', async () => {
      const client = new agentendpointserviceModule.v1.AgentEndpointServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.osconfig.agentendpoint.v1.StartNextTaskRequest()
      );
      const expectedOptions = {};
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.osconfig.agentendpoint.v1.StartNextTaskResponse()
      );
      client.innerApiCalls.startNextTask = stubSimpleCall(expectedResponse);
      const [response] = await client.startNextTask(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.startNextTask as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes startNextTask without error using callback', async () => {
      const client = new agentendpointserviceModule.v1.AgentEndpointServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.osconfig.agentendpoint.v1.StartNextTaskRequest()
      );
      const expectedOptions = {};
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.osconfig.agentendpoint.v1.StartNextTaskResponse()
      );
      client.innerApiCalls.startNextTask = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.startNextTask(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.osconfig.agentendpoint.v1.IStartNextTaskResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.startNextTask as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes startNextTask with error', async () => {
      const client = new agentendpointserviceModule.v1.AgentEndpointServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.osconfig.agentendpoint.v1.StartNextTaskRequest()
      );
      const expectedOptions = {};
      const expectedError = new Error('expected');
      client.innerApiCalls.startNextTask = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.startNextTask(request), expectedError);
      assert(
        (client.innerApiCalls.startNextTask as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('reportTaskProgress', () => {
    it('invokes reportTaskProgress without error', async () => {
      const client = new agentendpointserviceModule.v1.AgentEndpointServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.osconfig.agentendpoint.v1.ReportTaskProgressRequest()
      );
      const expectedOptions = {};
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.osconfig.agentendpoint.v1.ReportTaskProgressResponse()
      );
      client.innerApiCalls.reportTaskProgress = stubSimpleCall(
        expectedResponse
      );
      const [response] = await client.reportTaskProgress(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.reportTaskProgress as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes reportTaskProgress without error using callback', async () => {
      const client = new agentendpointserviceModule.v1.AgentEndpointServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.osconfig.agentendpoint.v1.ReportTaskProgressRequest()
      );
      const expectedOptions = {};
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.osconfig.agentendpoint.v1.ReportTaskProgressResponse()
      );
      client.innerApiCalls.reportTaskProgress = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.reportTaskProgress(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.osconfig.agentendpoint.v1.IReportTaskProgressResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.reportTaskProgress as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes reportTaskProgress with error', async () => {
      const client = new agentendpointserviceModule.v1.AgentEndpointServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.osconfig.agentendpoint.v1.ReportTaskProgressRequest()
      );
      const expectedOptions = {};
      const expectedError = new Error('expected');
      client.innerApiCalls.reportTaskProgress = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.reportTaskProgress(request), expectedError);
      assert(
        (client.innerApiCalls.reportTaskProgress as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('reportTaskComplete', () => {
    it('invokes reportTaskComplete without error', async () => {
      const client = new agentendpointserviceModule.v1.AgentEndpointServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.osconfig.agentendpoint.v1.ReportTaskCompleteRequest()
      );
      const expectedOptions = {};
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.osconfig.agentendpoint.v1.ReportTaskCompleteResponse()
      );
      client.innerApiCalls.reportTaskComplete = stubSimpleCall(
        expectedResponse
      );
      const [response] = await client.reportTaskComplete(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.reportTaskComplete as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes reportTaskComplete without error using callback', async () => {
      const client = new agentendpointserviceModule.v1.AgentEndpointServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.osconfig.agentendpoint.v1.ReportTaskCompleteRequest()
      );
      const expectedOptions = {};
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.osconfig.agentendpoint.v1.ReportTaskCompleteResponse()
      );
      client.innerApiCalls.reportTaskComplete = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.reportTaskComplete(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.osconfig.agentendpoint.v1.IReportTaskCompleteResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.reportTaskComplete as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes reportTaskComplete with error', async () => {
      const client = new agentendpointserviceModule.v1.AgentEndpointServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.osconfig.agentendpoint.v1.ReportTaskCompleteRequest()
      );
      const expectedOptions = {};
      const expectedError = new Error('expected');
      client.innerApiCalls.reportTaskComplete = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.reportTaskComplete(request), expectedError);
      assert(
        (client.innerApiCalls.reportTaskComplete as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('registerAgent', () => {
    it('invokes registerAgent without error', async () => {
      const client = new agentendpointserviceModule.v1.AgentEndpointServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.osconfig.agentendpoint.v1.RegisterAgentRequest()
      );
      const expectedOptions = {};
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.osconfig.agentendpoint.v1.RegisterAgentResponse()
      );
      client.innerApiCalls.registerAgent = stubSimpleCall(expectedResponse);
      const [response] = await client.registerAgent(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.registerAgent as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes registerAgent without error using callback', async () => {
      const client = new agentendpointserviceModule.v1.AgentEndpointServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.osconfig.agentendpoint.v1.RegisterAgentRequest()
      );
      const expectedOptions = {};
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.osconfig.agentendpoint.v1.RegisterAgentResponse()
      );
      client.innerApiCalls.registerAgent = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.registerAgent(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.osconfig.agentendpoint.v1.IRegisterAgentResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.registerAgent as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes registerAgent with error', async () => {
      const client = new agentendpointserviceModule.v1.AgentEndpointServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.osconfig.agentendpoint.v1.RegisterAgentRequest()
      );
      const expectedOptions = {};
      const expectedError = new Error('expected');
      client.innerApiCalls.registerAgent = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.registerAgent(request), expectedError);
      assert(
        (client.innerApiCalls.registerAgent as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('reportInventory', () => {
    it('invokes reportInventory without error', async () => {
      const client = new agentendpointserviceModule.v1.AgentEndpointServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.osconfig.agentendpoint.v1.ReportInventoryRequest()
      );
      const expectedOptions = {};
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.osconfig.agentendpoint.v1.ReportInventoryResponse()
      );
      client.innerApiCalls.reportInventory = stubSimpleCall(expectedResponse);
      const [response] = await client.reportInventory(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.reportInventory as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes reportInventory without error using callback', async () => {
      const client = new agentendpointserviceModule.v1.AgentEndpointServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.osconfig.agentendpoint.v1.ReportInventoryRequest()
      );
      const expectedOptions = {};
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.osconfig.agentendpoint.v1.ReportInventoryResponse()
      );
      client.innerApiCalls.reportInventory = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.reportInventory(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.osconfig.agentendpoint.v1.IReportInventoryResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.reportInventory as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes reportInventory with error', async () => {
      const client = new agentendpointserviceModule.v1.AgentEndpointServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.osconfig.agentendpoint.v1.ReportInventoryRequest()
      );
      const expectedOptions = {};
      const expectedError = new Error('expected');
      client.innerApiCalls.reportInventory = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.reportInventory(request), expectedError);
      assert(
        (client.innerApiCalls.reportInventory as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('receiveTaskNotification', () => {
    it('invokes receiveTaskNotification without error', async () => {
      const client = new agentendpointserviceModule.v1.AgentEndpointServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.osconfig.agentendpoint.v1.ReceiveTaskNotificationRequest()
      );
      const expectedOptions = {};
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.osconfig.agentendpoint.v1.ReceiveTaskNotificationResponse()
      );
      client.innerApiCalls.receiveTaskNotification = stubServerStreamingCall(
        expectedResponse
      );
      const stream = client.receiveTaskNotification(request);
      const promise = new Promise((resolve, reject) => {
        stream.on(
          'data',
          (
            response: protos.google.cloud.osconfig.agentendpoint.v1.ReceiveTaskNotificationResponse
          ) => {
            resolve(response);
          }
        );
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.receiveTaskNotification as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions)
      );
    });

    it('invokes receiveTaskNotification with error', async () => {
      const client = new agentendpointserviceModule.v1.AgentEndpointServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.osconfig.agentendpoint.v1.ReceiveTaskNotificationRequest()
      );
      const expectedOptions = {};
      const expectedError = new Error('expected');
      client.innerApiCalls.receiveTaskNotification = stubServerStreamingCall(
        undefined,
        expectedError
      );
      const stream = client.receiveTaskNotification(request);
      const promise = new Promise((resolve, reject) => {
        stream.on(
          'data',
          (
            response: protos.google.cloud.osconfig.agentendpoint.v1.ReceiveTaskNotificationResponse
          ) => {
            resolve(response);
          }
        );
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      await assert.rejects(promise, expectedError);
      assert(
        (client.innerApiCalls.receiveTaskNotification as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions)
      );
    });
  });
});
