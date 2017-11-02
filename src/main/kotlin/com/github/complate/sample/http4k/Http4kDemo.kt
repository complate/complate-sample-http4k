package com.github.complate.sample.http4k

import com.github.complate.ComplateTemplates
import org.http4k.core.Method
import org.http4k.core.Response
import org.http4k.core.Status
import org.http4k.routing.bind
import org.http4k.routing.routes
import org.http4k.server.Http4kServer
import org.http4k.server.Netty
import org.http4k.server.asServer
import org.http4k.template.TemplateRenderer
import org.http4k.template.ViewModel


val bundles = "build/classes/main/templates/views"

data class Person(val name: String, val age: Int) : ViewModel

class DemoApplication {
  private val server: Http4kServer
  private val renderer: TemplateRenderer = ComplateTemplates().HotReload(bundles)

  init {
    server = routes(
      "/person" bind Method.GET to {
        val viewModel = Person("Bob", 45)
        val renderedView = renderer(viewModel)
        Response(Status.OK).body(renderedView)
      }
    ).asServer(Netty(9000))
  }

  fun start() {
    println("starting the server")
    server.start()
  }

  fun stop() {
    println("stopping the server")
    server.stop()
  }
}
