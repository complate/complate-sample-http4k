package com.github.complate.sample.http4k

import kotlin.concurrent.thread


fun main(args: Array<String>) {
  DemoApplication().apply {
    start()
    Runtime.getRuntime().addShutdownHook(thread(start = false) { stop() })
  }
}
