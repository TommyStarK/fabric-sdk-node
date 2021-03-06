/**
 * Copyright 2020 IBM All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { ListenerSession } from './listenersession';
import { BlockListener } from './blocklistener';
import { BlockEventSource } from './blockeventsource';

export class BlockListenerSession implements ListenerSession {
	private readonly listener: BlockListener;
	private readonly eventSource: BlockEventSource;

	constructor(listener: BlockListener, eventSource: BlockEventSource) {
		this.listener = listener;
		this.eventSource = eventSource;
	}

	public async start() {
		await this.eventSource.addBlockListener(this.listener);
	}

	public close() {
		this.eventSource.removeBlockListener(this.listener);
	}
}
