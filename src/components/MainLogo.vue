<template>
    <div class="flex flex-col">
        <div class="flex tile-group rounded-[2px]">
            <div class="tile"><span class="tile-number">1.</span>T</div>
            <div class="tile"><span class="tile-number">2.</span>T</div>
            <div class="tile"><span class="tile-number">3.</span>S</div>
        </div>
        <div class="flex mt-1 -ml-1">
            <div class="sub-tile">m</div>
            <div class="sub-tile">i</div>
            <div class="sub-tile">n</div>
            <div class="sub-tile">i</div>
        </div>
    </div>
</template>

<style scoped>
.tile-group {
    box-shadow: -2px 2px 0px #000000;
}

.tile {
    width: 85px;
    height: 85px;
    font-size: 48px;
    @apply flex items-center justify-center bg-white border-2 border-black font-semibold relative
}

.tile:nth-child(1) {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
}

.tile:nth-child(3) {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
}

.tile+.tile {
    border-left: 0;
}

.tile-number {
    position: absolute;
    top: 4px;
    left: 4px;
    font-size: 8px;
}

.sub-tile {
    font-size: 24px;
    padding: 10px;
    @apply flex flex-1 items-center justify-center bg-black font-semibold relative border border-white text-white rounded
}
</style>