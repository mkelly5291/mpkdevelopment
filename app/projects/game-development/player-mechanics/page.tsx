import Link from 'next/link';
import Image from 'next/image';

export default function PlayerMechanics() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background grid */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(147, 51, 234, 0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(147, 51, 234, 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">

        {/* Back Button */}
        <Link
          href="/projects/game-development"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-12 group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Game Development
        </Link>

        {/* Header */}
        <div className="mb-16">
          <p className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-4">
            {'// Player Mechanics'}
          </p>
          <h1 className="text-6xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Player
            </span>
            <br />
            <span className="text-white">Mechanics</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Building the systems that define how a player interacts with the world. 
            From movement and camera control to health management and death handling — 
            all implemented in Unreal Engine using C++ and Blueprints.
          </p>
        </div>

        {/* Core Skills */}
        <div className="mb-16">
          <h2 className="text-sm font-mono text-purple-400 uppercase tracking-widest mb-8">
            {'// Core Skills'}
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: 'Player Movement',
                description: 'Axis-based movement input with controller rotation, forward and right vector calculations for responsive character control.',
                icon: '🎮',
              },
              {
                title: 'Camera System',
                description: 'Spring arm and camera component setup with pawn control rotation for smooth third-person camera behavior.',
                icon: '🎥',
              },
              {
                title: 'Health System',
                description: 'Dynamic health tracking with HUD updates, health percentage clamping, and real-time on-screen feedback.',
                icon: '❤️',
              },
              {
                title: 'Death Handling',
                description: 'Death state management including health bar reset, input disabling, and HUD removal on player death.',
                icon: '💀',
              },
              {
                title: 'Input Binding',
                description: 'Axis and action input binding in both C++ and Blueprints for movement, rotation, and combat actions.',
                icon: '⌨️',
              },
              {
                title: 'Combat Integration',
                description: 'Attack input binding delegated to weapon component with Blueprint visual scripting for animation control.',
                icon: '⚔️',
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-900/50 border border-purple-500/10 hover:border-purple-500/40 rounded-xl p-6 transition-all duration-300 hover:bg-purple-950/20 group">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Used */}
        <div className="mb-16">
          <h2 className="text-sm font-mono text-purple-400 uppercase tracking-widest mb-6">
            {'// Tools & Technologies'}
          </h2>
          <div className="flex flex-wrap gap-3">
            {['Unreal Engine 5', 'C++', 'Blueprints', 'USpringArmComponent', 'UCameraComponent', 'UInputComponent', 'FMath::Clamp', 'UKismetSystemLibrary'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg text-sm text-purple-300 font-mono hover:border-purple-500/50 transition-all">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Work Showcase */}
        <div className="mb-16">
          <h2 className="text-sm font-mono text-purple-400 uppercase tracking-widest mb-8">
            {'// Work Showcase'}
          </h2>

          {/* Demo Video */}
          <div className="bg-gray-900/50 border border-purple-500/10 rounded-2xl p-8 mb-8 hover:border-purple-500/30 transition-all duration-300">
            <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Player Movement & Combat Demo</h3>
                <p className="text-purple-400 font-mono text-sm">Unreal Engine 5 • C++ • Blueprints</p>
              </div>
              <span className="px-4 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-mono">
                In Development
              </span>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              A demonstration of the core player mechanics system built in Unreal Engine 5 using C++. 
              The video showcases player movement, shooting, and the health and damage system in action — 
              including real-time HUD updates when the player takes damage.
            </p>

            <div className="bg-black/40 rounded-xl p-4 border border-gray-800 mb-6">
              <p className="text-xs text-gray-500 font-mono uppercase tracking-wide mb-3">
                {'// Live Demo'}
              </p>
              <video controls className="w-full rounded-lg">
                <source src="/videos/PlayerMovement1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Axis-based movement with forward and right vector calculations',
                'Controller rotation driving camera and movement direction',
                'Real-time health bar updates on damage received',
                'Attack input bound to weapon component',
                'Smooth third-person camera with spring arm',
                'Death state disabling input and removing HUD',
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {point}
                </div>
              ))}
            </div>
          </div>

          {/* Health & Death System */}
          <div className="bg-gray-900/50 border border-purple-500/10 rounded-2xl p-8 mb-8 hover:border-purple-500/30 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-2">Health & Death System</h3>
            <p className="text-purple-400 font-mono text-sm mb-6">C++ • Unreal Engine 5 • HUD Integration</p>

            <p className="text-gray-300 leading-relaxed mb-6">
              A complete health and death system built in C++. The health component 
              tracks current and max health, updates the HUD in real time using a clamped 
              percentage value, and handles player death by disabling input, resetting the 
              health bar, and removing the HUD from the viewport. The system also includes 
              a health pickup interface and a player lost event broadcaster.
            </p>

            <div className="bg-black/40 rounded-xl p-4 border border-gray-800 mb-4">
              <p className="text-xs text-gray-500 font-mono uppercase tracking-wide mb-3">
                {'// Health & Death Implementation'}
              </p>
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/images/healthdeath.png"
                  alt="Health and Death System C++ Code"
                  width={900}
                  height={700}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              {[
                'FMath::Clamp for safe health percentage calculation',
                'Real-time HUD updates via UpdateHealthBar()',
                'UKismetSystemLibrary::PrintString for debug logging',
                'DisableInput() on death to prevent player control',
                'OnPlayerLost broadcast event for game state handling',
                'CanPickUpHealth interface implementation',
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {point}
                </div>
              ))}
            </div>
          </div>

          {/* Camera Setup */}
          <div className="bg-gray-900/50 border border-purple-500/10 rounded-2xl p-8 mb-8 hover:border-purple-500/30 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-2">Camera System</h3>
            <p className="text-purple-400 font-mono text-sm mb-6">C++ • USpringArmComponent • UCameraComponent</p>

            <p className="text-gray-300 leading-relaxed mb-6">
              A third-person camera system built using Unreal Engine's Spring Arm and Camera 
              components. The spring arm is offset and attached to the root component with 
              pawn control rotation enabled, while the camera is attached to the spring arm 
              socket and set to not use pawn control rotation independently — giving smooth, 
              lag-free camera behavior that follows the player naturally.
            </p>

            <div className="bg-black/40 rounded-xl p-4 border border-gray-800 mb-4">
              <p className="text-xs text-gray-500 font-mono uppercase tracking-wide mb-3">
                {'// Camera Constructor Setup'}
              </p>
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/images/playercamera.png"
                  alt="Player Camera C++ Setup"
                  width={900}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Spring arm attached to root with offset positioning',
                'bUsePawnControlRotation on spring arm for camera control',
                'Camera attached to spring arm socket name',
                'Camera rotation decoupled from pawn for smooth behavior',
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {point}
                </div>
              ))}
            </div>
          </div>

          {/* Input System */}
          <div className="bg-gray-900/50 border border-purple-500/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-2">Input System</h3>
            <p className="text-purple-400 font-mono text-sm mb-6">C++ • Blueprints • UInputComponent</p>

            <p className="text-gray-300 leading-relaxed mb-6">
             The input system was implemented in C++ using Unreal Engine's UInputComponent, 
  binding axis inputs for movement and rotation as well as an action input for 
  attacking. The Blueprint screenshot shows the same input functionality as it 
  would appear using Unreal's built-in visual scripting system — demonstrating 
  an understanding of both approaches and how the same logic translates between 
  code and Blueprints. Movement uses controller rotation yaw to drive directional 
  input so the character always moves relative to where the camera is facing.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-black/40 rounded-xl p-4 border border-gray-800">
                <p className="text-xs text-gray-500 font-mono uppercase tracking-wide mb-3">
                  {'// C++ Input Binding'}
                </p>
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/InputActions.png"
                    alt="C++ Input Actions"
                    width={900}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="bg-black/40 rounded-xl p-4 border border-gray-800">
                <p className="text-xs text-gray-500 font-mono uppercase tracking-wide mb-3">
                  {'// Blueprint Input Graph'}
                </p>
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/BPInputActions.png"
                    alt="Blueprint Input Actions"
                    width={900}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              {[
                'BindAxis for TurnRight, LookUp, MoveForward, MoveRight',
                'BindAction for Attack on IE_Pressed event',
                'Controller yaw rotation for camera-relative movement',
                'FRotationMatrix for right vector strafing calculation',
                'Blueprint visual scripting for animation triggers',
                'Weapon component delegation for attack logic',
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Maxwell Kelly. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm text-center md:text-right">
              Built from scratch with <span className="text-purple-400 font-semibold">Next.js</span>,
              <span className="text-purple-400 font-semibold"> TypeScript</span>,
              <span className="text-purple-400 font-semibold"> Tailwind CSS</span>, and
              <span className="text-purple-400 font-semibold"> Canvas API</span>
              <span className="text-gray-600"> — Designed & developed by me</span>
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}