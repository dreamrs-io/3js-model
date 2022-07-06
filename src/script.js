import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { SMAAPass } from 'three/examples/jsm//postprocessing/SMAAPass.js'
import { LinearFilter, RGBAFormat } from 'three'



// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color('rgb(203, 203, 212)');


// size

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
})
// renderer.autoclear = false
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
 

// planeGeometry
const planeGeometry = new THREE.PlaneBufferGeometry(2, 2, 2)
const  material = new THREE.MeshBasicMaterial({ color: 'rgb(246, 255, 54)'})
const mesh = new THREE.Mesh(planeGeometry, material)
scene.add(mesh)
mesh.position.x = 1.7
mesh.position.y = 1.2
mesh.position.z = -3
mesh.rotation.x = Math.PI * 0.5
mesh.rotation.y = Math.PI * 0.5


// planeGeometry2
const planeGeometry1 = new THREE.PlaneBufferGeometry(3, 3, 3)
const  material1 = new THREE.MeshBasicMaterial({ color: 'rgb(240, 252, 3)'})
const mesh1 = new THREE.Mesh(planeGeometry1, material1)
scene.add(mesh1)
mesh1.position.x = 1
mesh1.position.y = 1.5
mesh1.position.z = -2
mesh1.rotation.x = Math.PI 


// loader
const gltfLoader = new GLTFLoader()


var  o
gltfLoader.load(
    '/models/s.gltf',
    (gltf) =>
    {
        o = gltf.scene
        o.scale.set(1, 1, 1)  
        o.effectcomposer = true
        scene.add(o)
    }
    
)
var  ob
gltfLoader.load(
    '/models/d.gltf',
    (gltf) =>
    {
        ob = gltf.scene
        ob.scale.set(1, 1, 1)  
        ob.position.set(0, 0.2, 0.22)
        scene.add(ob)
    }
    
)
var  ob
gltfLoader.load(
    '/models/a.gltf',
    (gltf) =>
    {
        ob = gltf.scene
        ob.scale.set(1, 1, 1)  
        ob.effectcomposer = false
        ob.alpha = false
        scene.add(ob)
    }
    
)


var  x
gltfLoader.load(
    '/models/c.gltf',
    (gltf) =>
    {  

        x = gltf.scene
        x.effectcomposer = true
        x.scale.set(1, 1, 1)
        x.position.set(0, 0.3, 0.22)
        scene.add(x)
    }
    
)
var  x
gltfLoader.load(
    '/models/f.gltf',
    (gltf) =>
    {  

        x = gltf.scene
        x.effectcomposer = true
        x.scale.set(1, 1, 1)
        x.position.set(0, 0.3, 0.22)
        scene.add(x)
    }
    
)
var  x
gltfLoader.load(
    '/models/g.gltf',
    (gltf) =>
    {  

        x = gltf.scene
        x.effectcomposer = true
        x.scale.set(1, 1, 1)
        x.position.set(0.1, 0, -0.07)
        scene.add(x)
    }
    
)

/**
 * Lights
 */

// directionalLight
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4)
directionalLight.castShadow = false
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 15
directionalLight.shadow.camera.left = - 7
directionalLight.shadow.camera.top = 7
directionalLight.shadow.camera.right = 7
directionalLight.shadow.camera.bottom = - 7
directionalLight.position.set(0, 5, 2)
scene.add(directionalLight)

// spotLight
const spotLight = new THREE.SpotLight(0xff2200, 10, 2, 1);
spotLight.position.set(0.9, 2.2, 5.25)
spotLight.rotation.set(Math.PI * 0.5,  -Math.PI * 0.5, -1)
scene.add(spotLight)

// spotLight1
const spotLight1 = new THREE.SpotLight(0xff2200, 20, 2.5)
spotLight1.position.set(2.3, 1.2, -3.7)
scene.add(spotLight1)

// spotLight2
const spotLight2 = new THREE.SpotLight(0xffffff, 20, 2)
spotLight2.rotateX = -Math.PI * 0.5
spotLight2.position.set(-3.8, 1, 3.9)
scene.add(spotLight2)

// spotLight3
const spotLightx = new THREE.SpotLight(0xffffff, 5, 2.5)
spotLight2.rotateX = -Math.PI * 0.5
spotLightx.position.set(-3.5, 2, 2)
scene.add(spotLightx)

// spotLight4
const spotLight4 = new THREE.SpotLight('rgb(250, 189, 5)', 10, 2.1)
spotLight4.position.set(4, 1, -3.7)
scene.add(spotLight4)

// directionalLight1
const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1)
directionalLight1.position.set(3.5, 1, -3.3)
scene.add(directionalLight1)


// fog
const fog = new THREE.Fog('#262837', 1, 30)
//scene.fog = fog


// resize
window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // update composer
    effectcomposer.setSize(sizes.width, sizes.height)
    effectcomposer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 2, 4)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.target.set(0, 0.75, 0)
controls.enableDamping = true

// postProcessing
// render target
const renderTarget = new THREE.WebGLRenderTarget(
    800,
    600,
    
    {

        minFilter: LinearFilter,
        mogFilter: LinearFilter,
        format: RGBAFormat,
        encoding: THREE.sRGBEncoding
}
)

// composer
const effectcomposer = new EffectComposer(renderer, renderTarget);
effectcomposer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
effectcomposer.setSize(sizes.width, sizes.height);

const renderPass = new RenderPass(scene, camera)
effectcomposer.addPass(renderPass)

const smaaPass = new SMAAPass()
effectcomposer.addPass(smaaPass)

const unrealBloomPass = new UnrealBloomPass()
unrealBloomPass.strength = 1
unrealBloomPass.radius = 0.05
unrealBloomPass.threshold = 0.9
effectcomposer.addPass(unrealBloomPass)


/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    // Update controls
        controls.update()

    // Render
        // renderer.render(scene, camera)
        effectcomposer.render()

    // Call tick again on the next frame
        window.requestAnimationFrame(tick)
}

tick()



